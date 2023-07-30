import { Router } from "express";
import { auth } from "../middleware/auth.js";
import chatController from "../controllers/chat.js";

const router = Router();

router
  .route("/")
  .post(auth, chatController.createChat)
  .get(auth, chatController.getAllChats);

// prettier-ignore
router
	.route("/:id")
	.get(auth, chatController.getChat);

// prettier-ignore
router
	.route("/exit/:id")
	.post(auth, chatController.exitChat);

export default router;
