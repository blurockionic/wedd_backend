import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

const jwtAuthentication = (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      (req.headers["authorization"] &&
        req.headers["authorization"].startsWith("Bearer ") &&
        req.headers["authorization"].split(" ")[1]);

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Access token is missing or invalid",
      });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired. Please log in again.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({
        success: false,
        message: "Invalid token. Please log in again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Authentication failed. Please try again.",
    });
  }
};

export default jwtAuthentication;
