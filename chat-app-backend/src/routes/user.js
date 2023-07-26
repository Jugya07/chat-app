import { Router } from "express";
import { user_signup, user_login } from "../controllers/user.js";

const router = Router();
router.route("/signup").post(user_signup);
router.route("/login").post(user_login);

export default router;
