import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

// Validate environment variable at startup
if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET environment variable is missing");
}

const jwtAuthentication = (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token =
      req.cookies.accessToken ||
      (req.headers.authorization?.startsWith("Bearer ") &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return next(new CustomError("Unauthorized: No token provided", 401)); // 401 instead of 403
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;

    // Optional logging
    if (process.env.NODE_ENV === "development") {
      console.log(`Authenticated user: ${decoded.id}`);
    }

    next();
  } catch (error) {
    // Handle JWT-specific errors
    if (error.name === "TokenExpiredError") {
      return next(new CustomError("Token expired. Please log in again", 401));
    }
    if (error.name === "JsonWebTokenError") {
      return next(new CustomError("Invalid token. Please log in again", 401));
    }

    // Forward other errors
    next(error);
  }
};

export default jwtAuthentication;