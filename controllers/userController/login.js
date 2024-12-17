import { loginSchema } from "../../validation schema/user.schema.js";
import GenerateToken from "../../helper/generateToken.js";

import bcrypt from "bcryptjs";
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import { registerEmailContent } from "../../constant/static.js";
import sendVerificationEmail from "../../service/emailService.js";

const prisma = new PrismaClient();

const userLogin = async (req, res, next) => {

  console.log(req.cookie);

  try {
    const validatedData = loginSchema.parse(req.body);

    const user = await prisma.User.findUnique({
      where: { email: validatedData.email },
    });

    if (!user) {
      throw new CustomError("User not found with this email", 404);
    }

    if (!user.is_verified) {
      const emailVerificationToken =
        GenerateToken.generateEmailVerificationToken(user);
      const emailContent = registerEmailContent(
        emailVerificationToken,
        user.role
      );

      // Send the verification email
      await sendVerificationEmail(user.email, emailContent);

      // Throw error with a clear message about verification
      throw new CustomError(
        "Your email is not verified. Please check your mail for verification.",
        400
      );
    }

    if (!isPasswordCorrcet(validatedData.password, user.password_hash)) {
      throw new CustomError("Invalid password", 400);
    }

    // Generate access token

    const accessToken = await GenerateToken.generateAccessToken(user);
    const refreshToken = await GenerateToken.generateRefreshToken(user);

    // Save refresh token to the database

    await prisma.User.update({
      where: { id: user.id },
      data: { refresh_Token: refreshToken },
    });

    // Sanitize user object
    const {
      password_hash,
      resetPassword_Token,
      resetPassword_Expire,
      updated_at,
      created_at,
      ...sanitizedUser
    } = user;

    const cookieOptions = {
      secure: true,
      httpOnly: true,
      sameSite: "Lax",
      path: "/",
      expiry:60*60*100
    };

    return res
   
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        accessToken,
        user: sanitizedUser,
      });
  } catch (error) {
    next(error);
  }
};

// Function to generate the access token

const isPasswordCorrcet = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export default userLogin;
