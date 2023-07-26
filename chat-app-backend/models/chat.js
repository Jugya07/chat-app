import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isAdmin: {
    type: Boolean,
  },
});

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
    messages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Message",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
