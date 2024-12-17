import { z } from "zod";
import CustomError from "../utils/CustomError.js";
z

const errorMiddleware = (err, req, res, next) => {
  console.error(`Error: ${err.name}, Message: ${err.message}, Stack: ${err.stack}`);

  let statusCode = 500;
  let message = "An unexpected error occurred.";
  let errors = null;

  // Handle Custom Errors
  if (err instanceof CustomError) {
    statusCode = err.statusCode || 400;
    message = err.message;
  } else if (err.name === "MulterError") {
    // Handle Multer-Specific Errors
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        message = "File size exceeds the allowed limit.";
        break;
      case "LIMIT_FILE_COUNT":
        message = "Too many files uploaded at once.";
        break;
      case "LIMIT_UNEXPECTED_FILE":
        message = "Unexpected file field.";
        break;
      default:
        message = "An error occurred during file upload.";
    }
    statusCode = 400;
  } else if (err instanceof z.ZodError) {
    // Handle Zod Validation Errors
    errors = err.errors.map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));
    statusCode = 400;
    message = "Validation errors occurred.";
  }

  // Respond with structured error
  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

export default errorMiddleware;
