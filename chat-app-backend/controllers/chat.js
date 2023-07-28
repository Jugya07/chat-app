import Chat from "../models/chat.js";
import User from "../models/user.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

const createChat = catchAsync(async (req, res, next) => {
  const { recipientId, groupName } = req.body;
  if (!recipientId) {
    return next(new ApiError("A chat must contain atleast two members", 400));
  }

  const recipient = await User.findById(recipientId);
  if (!recipient) {
    return next(new ApiError("Member not found", 404));
  }

  const chat = await Chat.create({
    name: groupName || "Default",
    members: [
      {
        user: req.user._id,
        isAdmin: true,
      },
      {
        user: recipientId,
        isAdmin: false,
      },
    ],
  });

  recipient.chats.push(chat._id);
  req.user.chats.push(chat._id);

  await Promise.all([
    recipient.save({
      validateBeforeSave: true,
    }),
    req.user.save({
      validateBeforeSave: true,
    }),
  ]);

  return res.status(201).json({
    status: "success",
    message: "Chat created successfully",
    chat: chat,
  });
});

const getAllChats = catchAsync(async (req, res, next) => {
  await req.user.populate({
    path: "chats",
    select: "_id name members",
  });

  return res.status(200).json({
    status: "success",
    chats: req.user.chats,
  });
});

export default { createChat, getAllChats };
