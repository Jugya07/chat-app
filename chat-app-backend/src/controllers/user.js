import User from "../models/user.js";
import { generateTokenId } from "../utils/generateToken.js";
import { setPassword, validPassword } from "../utils/generatePassword.js";

const user_signup = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ error: "User already exists" });
    }
    const { hashPassword, salt } = setPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      salt,
      pic,
    });

    return res.json({
      message: "User created successfully",
      newUser,
      token: generateTokenId(newUser._id),
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const user_login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    if (!validPassword(password, user.password, user.salt)) {
      return res.status(422).json({ error: "Invalid Credentials" });
    } else {
      return res.json({
        message: "User logged in successfully",
        user,
        token: generateTokenId(user._id),
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export { user_signup, user_login };
