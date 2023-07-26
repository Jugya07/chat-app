const globalErrorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let status = err.status || "error";
  let message = err.message || "something went wrong";

  res.status(statusCode).json({
    status: status,
    message: message,
  });
};

export default globalErrorHandler;
