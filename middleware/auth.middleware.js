import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";
const jwtAuthentication = (req, res, next) => {
  try {
    // Extract the token from the cookies or Authorization header
    const token =
      req.cookies.accessToken ||
      (req.headers["authorization"] &&
        req.headers["authorization"].startsWith("Bearer ") &&
        req.headers["authorization"].split(" ")[1]);

    // If no token is found, deny access
    if (!token) {
      throw new CustomError("Access token is missing or invalid", 403);
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Attach the decoded user data to the request object
    req.user = decoded;

    // // Optional: Log the user data during development
    // if (process.env.NODE_ENV === "development") {
    //   console.log("Authenticated user:", req.user);
    // }

    next();
  } catch (error) {
    // Handle token verification errors
    if (error.name === "TokenExpiredError") {
      return new CustomError("Token has expired. Please log in again", 401);
    }
    if (error.name === "JsonWebTokenError") {
      return new CustomError("Invalid token. Please log in again."), 403;
    }

    next(error);
  }
};

export default jwtAuthentication;
