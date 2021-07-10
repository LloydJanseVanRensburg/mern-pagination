const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (err?.code === 11000) {
    const message = `Duplicate Field value entered`;
    error = new ErrorResponse(message, 400);
  }

  if (err?.name === "ValidationError") {
    error = new ErrorResponse(err?.message, 400);
  }

  console.log(error?.message);

  res.status(error?.statusCode || 500).json({
    success: false,
    error: error?.message || "Server Error",
  });
};

module.exports = errorHandler;