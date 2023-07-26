import crypto from "crypto";

const setPassword = function (password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);

  return { salt, hashPassword };
};

const validPassword = function (password, originalPassword, salt) {
  var hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return originalPassword === hash;
};

export { setPassword, validPassword };
