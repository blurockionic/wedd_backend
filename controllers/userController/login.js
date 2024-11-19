
import {  loginSchema } from "../../validation schema/user.schema.js";
import GenerateAccessandRefreshToken from "../../helper/generateAccessandRefreshToken.js";

import z from "zod";
import bcrypt from "bcryptjs";
import CustomError from "../../utils/CustomError.js"
import jwt from "jsonwebtoken"
import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const userLogin = async (req, res, next) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const user = await prisma.User.findUnique({
      where: { email: validatedData.email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found with this email" });
    }

    if (!isPasswordCorrcet(validatedData.password, user.password_hash)) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate access token
    
    const accessToken = await GenerateAccessandRefreshToken.generateAccessToken(user);
    const refreshToken = await GenerateAccessandRefreshToken.generateRefreshToken(user); 

    // Save refresh token to the database

    await prisma.User.update({
      where: { user_id: user.user_id },
      data: { refresh_Token: refreshToken },
    });

    // Sanitize user object
    const { password_hash,  resetPasswordToken, resetPasswordExpire, updated_at, created_at, ...sanitizedUser } = user;

    // Cookie options for security
    const cookieOption = {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    };


    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOption)
      .cookie("refreshToken", refreshToken, cookieOption)
      .json({
        message: "Login successful",
        accessToken,
        user: sanitizedUser,
      });
  } catch (error) {
    console.error(`${error.message} : ${error.stack}`);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(new CustomError("Something went wrong during login.", 500));
  }
};

  // Function to generate the access token
  

const isPasswordCorrcet = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export default userLogin