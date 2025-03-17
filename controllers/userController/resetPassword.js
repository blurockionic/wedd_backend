import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import CustomError from "../../utils/CustomError.js";
import {

  resetTokenSchema,
} from "../../validation schema/user.schema.js";
import { z } from "zod";

const prisma = new PrismaClient();

const passValid = z
.string()
.min(6, "Password must be at least 6 characters long")
.regex(/[a-z]/, "Password must include at least one lowercase letter")
.regex(/[A-Z]/, "Password must include at least one uppercase letter")
.regex(/\d/, "Password must include at least one number")
.regex(/[!@#$%^&*]/, "Password must include at least one special character");

export const resetPassword = async (req, res, next) => {
  try {

    // Extract and validate token (from query or params) and new password

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
      throw new CustomError("Invalid token. Please request a new reset link.", 400);
    }

    // Fetch the user using the decoded token's id

    const user = await prisma.User.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      throw new CustomError("Email is Not registerd", 400);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(confirmPassword, 10);

    // Update the password and clear reset token fields
    await prisma.User.update({
      where: { id: user.id },
      data: {
        password_hash: hashedPassword,
      },
    });

    return res.status(200).json({
      message: "Password reset successfully. You can now log in with your new password.",
      success:true
    });
  } catch (error) {
    next(
      error
    );
  }
};
