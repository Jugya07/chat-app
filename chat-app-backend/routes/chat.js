import { Router } from "express";
import { auth } from "../middleware/auth.js";
import chatController from "../controllers/chat.js";

const router = Router();
router.route("/").post(auth, chatController.createChat);
router.route("/").get(auth, chatController.getAllChats);
export default router;
