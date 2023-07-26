import { Router } from "express";
import userController from "../controllers/user.js";

const router = Router();
router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);

export default router;
