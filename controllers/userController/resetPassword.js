import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import CustomError from "../../utils/CustomError.js";
import {
  resetPasswordSchema,
  resetTokenSchema,
} from "../../validation schema/user.schema.js";

const prisma = new PrismaClient();

export const resetPassword = async (req, res, next) => {
  try {

   

    // Extract and validate token (from query or params) and new password
    const { token } = resetTokenSchema.parse(req.query); // Assuming token comes from query string
    const { password } = resetPasswordSchema.parse(req.body); // Renamed for clarity

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
      throw new CustomError("Invalid token. Please request a new reset link.", 400);
    }

    // Fetch the user using the decoded token's user_id
    const user = await prisma.User.findUnique({
      where: { user_id: decodedToken.user_id },
    });

    if (!user || user.resetPassword_Token !== token) {
      throw new CustomError("Invalid or expired token", 400);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password and clear reset token fields
    await prisma.User.update({
      where: { user_id: user.user_id },
      data: {
        password_hash: hashedPassword,
        resetPassword_Token: "", // Clear token
        resetPassword_Expire: "", // Clear expiry
      },
    });

    return res.status(200).json({
      message: "Password reset successfully. You can now log in with your new password.",
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
