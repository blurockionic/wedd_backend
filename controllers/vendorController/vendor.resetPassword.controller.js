import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/mongo/index.js"; // MongoDB Prisma client
import CustomError from "../../utils/CustomError.js";
import {
  resetPasswordSchema,
  resetTokenSchema,
} from "../../validation schema/user.schema.js"; // Update schema for vendor

const prisma = new PrismaClient();

 const resetVendorPassword = async (req, res, next) => {
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

    

    // Fetch the vendor using the decoded token's vendor_id
    const vendor = await prisma.Vendor.findUnique({
      where: { id: decodedToken.id },
    });

    if (!vendor || vendor.resetPassword_Token !== token) {
      throw new CustomError("Invalid or expired token", 400);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password and clear reset token fields
    await prisma.Vendor.update({
      where: { id: vendor.id },
      data: {
        password_hash: hashedPassword,
        resetPassword_Token: "", // Clear token
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

export default resetVendorPassword;