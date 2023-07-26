import jwt from "jsonwebtoken";
import User from "../models/user.js";

const auth = async (req, res, next) => {
  try {
    const jwt_token = req.headers["authorization"].split(" ")[1];
    if (!jwt_token) {
      return res.status(401).json({
        status: "fail",
        message: "No access token found",
      });
    }
    const decodedToken = jwt.verify(jwt_token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "fail",
      message: "invalid access token",
    });
  }
};

export { auth };
