import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";
import { z } from "zod";

const prisma = new PrismaClient();

const passValid = z
  .string()
  .min(6, "Password must be at least 6 characters long")
  .regex(/[a-z]/, "Password must include at least one lowercase letter")
  .regex(/[A-Z]/, "Password must include at least one uppercase letter")
  .regex(/\d/, "Password must include at least one number")
  .regex(/[!@#$%^&*]/, "Password must include at least one special character");

export const resetVendorPassword = async (req, res, next) => {
  try {
    // Validate token from query params
    const { token } = req.query;

    const { confirmPassword } = req.body;

    // Verify the JWT token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        throw new CustomError(
          "Token has expired. Please request a new reset link.",
          400
        );
      }
      throw new CustomError(
        "Invalid token. Please request a new reset link.",
        400
      );
    }

    // Fetch the user using the decoded token's ID
    const user = await prisma.Vendor.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user || user.resetPassword_Token !== token) {
      throw new CustomError("Invalid or expired token", 400);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(confirmPassword, 10);

    // Update the user's password and clear the reset token
    await prisma.Vendor.update({
      where: { id: user.id },
      data: {
        password_hash: hashedPassword,
        resetPassword_Token: "", // Clear the reset token
      },
    });

    // Send success response
    return res.status(200).json({
      message:
        "Password reset successfully. You can now log in with your new password.",
    });
  } catch (error) {
    console.error("Error resetting password:", error); // Log error details
    next(
      new CustomError(
        error.message || "Error while resetting the password",
        500
      )
    );
  }
};
