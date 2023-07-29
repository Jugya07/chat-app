import Chat from "../models/chat.js";
import User from "../models/user.js";
import Message from "../models/message.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import performTransaction from "../utils/performTransaction.js";

const createChat = catchAsync(async (req, res, next) => {
  const { memberIds, groupName } = req.body;
  if (!Array.isArray(memberIds) || memberIds.length === 0) {
    return next(new ApiError("A chat must contain atleast two members", 400));
  }

  const findMembersPromise = memberIds.map((memberId) =>
    User.findById(memberId)
  );
  const members = await Promise.all(findMembersPromise);

  members.forEach((member) => {
    if (!member) {
      throw new ApiError("Member not found", 404);
    }
  });

  const chatMembers = members.map((m) => {
    return {
      user: m._id,
      isAdmin: false,
    };
  });
  chatMembers.push({
    user: req.user._id,
    isAdmin: true,
  });

  const chat = await performTransaction(async () => {
    const chat = await Chat.create({
      name: groupName || "Default",
      members: chatMembers,
    });

    const updateMemberPromise = members.map((member) => {
      member.chats.push(chat._id);
      return member.save();
    });
    req.user.chats.push(chat._id);
    updateMemberPromise.push(req.user.save());

    await Promise.all(updateMemberPromise);
    return chat;
  });

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

  req.user.chats.members = undefined;

  return res.status(200).json({
    status: "success",
    chats: req.user.chats,
  });
});

const getChat = catchAsync(async (req, res, next) => {
  const chatId = req.params.id;

  // check if user is trying to access a group s/hes not present in
  if (
    !req.user.chats.find((id) => {
      return id.toString() === chatId;
    })
  ) {
    return next(new ApiError("Invalid chat id", 401));
  }

  let chat = await Chat.findById(chatId)?.populate({
    path: "messages",
  });

  if (!chat) {
    return next(new ApiError("Invalid chat id", 404));
  }

  return res.status(200).json({
    status: "success",
    chat: chat,
  });
});

export default { createChat, getAllChats, getChat };
