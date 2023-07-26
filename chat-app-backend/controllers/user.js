import User from "../models/user.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { generateTokenId } from "../utils/generateToken.js";
import { setPassword, validPassword } from "../utils/generatePassword.js";

const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    return next(new ApiError("Please fill in all the fields", 400));
  }
  const user = await User.findOne({ email });
  if (user) {
    return next(new ApiError("User already exists", 400));
  }

  const { hashPassword, salt } = setPassword(password);
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    salt,
    pic,
  });

  newUser.password = undefined;
  newUser.salt = undefined;
  return res.json({
    status: "success",
    message: "User created successfully",
    user: newUser,
    token: generateTokenId(newUser._id),
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError("Please fill in all the fields", 400));
  }

  const user = await User.findOne({ email });
  if (!user || !validPassword(password, user.password, user.salt)) {
    return next(new ApiError("Invalid credentials", 401));
  }

  user.password = undefined;
  user.salt = undefined;
  return res.json({
    status: "sucess",
    message: "User logged in successfully",
    user: user,
    token: generateTokenId(user._id),
  });
});

export default { signup, login };
