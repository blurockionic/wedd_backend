import jwt from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import GenerateToken from "../../helper/generateToken.js";
import CustomError from "../../utils/CustomError.js"; // Ensure this is correctly imported

const prisma = new PrismaClient();

export const refreshAccessToken = async (req, res, next) => {
  try {
    const incomingRefreshToken =
      req.cookies.refreshToken ||
      (req.headers["authorization"] &&
        req.headers["authorization"].startsWith("Bearer ") &&
        req.headers["authorization"].split(" ")[1]) ||
      req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new CustomError("Unauthorized access, send refreshToken", 401);
    }

    // Corrected method: use jwt.verify
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET 
    );

    // Find the user based on the decoded token id


    const user = await prisma.user.findUnique({
      where: { user_id : decodedToken.user_id }, 
    });

    if (!user) {
      throw new CustomError("Invalid refresh token", 401);
    }

    if (user.refresh_Token !== incomingRefreshToken) {
      throw new CustomError(
        "Refresh token expired or used. Please log in again.",
        401
      );
    }

    // Generate new tokens
    const accessToken = await GenerateToken.generateAccessToken(user);
    const newRefreshToken = await GenerateToken.generateRefreshToken(user); 


    // update new refresh token in database

    await prisma.User.update({
        where: { user_id: user.user_id },
        data: { refresh_Token: newRefreshToken },
      });


    // Cookie options (secure flag for production)
    const cookieOption = {
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      httpOnly: true,
    };

    
    // Send the new tokens to both web (cookies) and mobile (response body)

    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOption)
      .cookie("refreshToken", newRefreshToken, cookieOption)
      .json({
        message: "Access token refreshed",
        tokens: {
          accessToken,
          refreshToken: newRefreshToken,
        },
      });
  } catch (error) {
    next(
      new CustomError(
        error.message || "Error while refreshing access token",
        500
      )
    );
  }
};
