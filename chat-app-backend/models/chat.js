import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

const chatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    members: {
      type: [memberSchema],
      required: true,
    },
  },
  {
    id: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

chatSchema.virtual("memberCount").get(function () {
  return this.members.length;
});

chatSchema.virtual("messages", {
  ref: "Message",
  localField: "_id",
  foreignField: "chat",
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
