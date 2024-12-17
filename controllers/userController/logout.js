import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const userLogout = async (req, res, next) => {
  try {
    // Get user ID from the authenticated request

    const userId = req.user?.id;

    if (!userId) {
      throw new CustomError("User ID is required but not found", 404);
    }

    // Clear the refresh token from the database

    await prisma.User.update({
      where: { id: userId },
      data: { refresh_Token: "" },
    });

    // Cookie options for clearing cookies securely
    const cookieOption = {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    };

    // Clear cookies and respond
    return res
      .status(200)
      .clearCookie("accessToken", cookieOption)
      .clearCookie("refreshToken", cookieOption)
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (error) {
    next(error);
  }
};

export default userLogout;
