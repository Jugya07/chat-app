import jwt from "jsonwebtoken";
import User from "../models/user.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";

const auth = catchAsync(async (req, res, next) => {
  try {
    const authToken = req.headers["authorization"];
    if (!authToken || !authToken.split(" ")[1]) {
      return next(new ApiError("No access token found", 400));
    }

    const decodedToken = jwt.verify(
      authToken.split(" ")[1],
      process.env.JWT_SECRET
    );
    const user = await User.findById(decodedToken.id);
    req.user = user;
    next();
  } catch (error) {
    return next(new ApiError("Invalid / Non existant access token", 401));
  }
});

export { auth };
