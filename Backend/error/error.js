// Used for error Handling

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Create middleware

export const errorMiddleWare = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error!!";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
