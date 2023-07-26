import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.js";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(morgan("default"));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({ chats: "Hello bhai" });
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
