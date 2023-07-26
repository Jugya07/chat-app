import jwt from "jsonwebtoken";

const generateTokenId = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { generateTokenId };
