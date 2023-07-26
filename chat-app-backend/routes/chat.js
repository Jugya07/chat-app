import { Router } from "express";
import { auth } from "../middleware/auth.js";
import chatController from "../controllers/chat.js";

const router = Router();
router.route("/").post(auth, chatController.createChat);

export default router;
