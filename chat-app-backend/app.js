import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import morgan from "morgan";
import { auth } from "./middleware/auth.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTION");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(morgan("dev"));
app.use(express.json());

app.get("/", auth, (req, res) => {
  res.json({ chats: "Hello bhai" });
});

app.use("/api/user", userRoutes);
app.use(globalErrorHandler);

export default app;
