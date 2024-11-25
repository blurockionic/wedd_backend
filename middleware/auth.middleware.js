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
      return res
        .status(401)
        .json({ message: "Access token is missing or invalid." });
    }

    

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Attach the decoded user data to the request object
    req.user = decoded;

    // Optional: Log the user data during development
    if (process.env.NODE_ENV === "development") {
      console.log("Authenticated user:", req.user);
    }

    next();
  } catch (error) {
    // Handle token verification errors
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token has expired. Please log in again." });
    }
    if (error.name === "JsonWebTokenError") {
      return res
        .status(403)
        .json({ message: "Invalid token. Please log in again." });
    }

    // Generic error handler
    next(new CustomError("Authentication error. Please try again later.", 500));
  }
};

export default jwtAuthentication;
