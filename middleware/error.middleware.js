import CustomError from "../utils/CustomError.js";

const errorMiddleware = (err, req, res, next) => {
  console.error(`Error: ${err.name}, Message: ${err.message}, Stack: ${err.stack}`);

  // Handle Custom Errors
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
      },
    });
  }

  // Handle Multer-Specific Errors
  if (err.name === "MulterError") {
    let errorMessage;

    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        errorMessage = "File size exceeds the allowed limit.";
        break;
      case "LIMIT_FILE_COUNT":
        errorMessage = "Too many files uploaded at once.";
        break;
      case "LIMIT_UNEXPECTED_FILE":
        errorMessage = "Unexpected file field.";
        break;
      default:
        errorMessage = "An error occurred during file upload.";
    }

    return res.status(400).json({
      error: {
        message: errorMessage,
      },
    });
  }

  // Handle Unexpected Errors
  return res.status(500).json({
    error: {
      message: "An unexpected error occurred.",
    },
  });
};

export default errorMiddleware;
