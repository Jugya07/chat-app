import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.js";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTION");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ chats: "Hello bhai" });
});

app.use("/api/user", userRoutes);

export default app;
