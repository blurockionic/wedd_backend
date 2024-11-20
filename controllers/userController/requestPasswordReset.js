
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import CustomError from "../../utils/CustomError.js";
import { requestPasswordResetSchema } from "../../validation schema/user.schema.js";
import GenerateToken from "../../helper/generateToken.js";
import sendVerificationEmail from "../../service/emailService.js";
import ms from 'ms';
import z from "zod";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();

const createEmailContent = (token) => ({
  subject: "Password Reset Request",
  text: `Click on the link below to reset your password: ${process.env.BASE_URL}/api/v1/users/reset-password?token=${token}`,
  html: `
    <p>Hello,</p>
    <p>We received a request to reset your password. Please click the link below to reset it:</p>
    <a href="${process.env.BASE_URL}/api/v1/users/reset-password?token=${token}">Reset Password</a>
    <p>This link will expire in 10 minutes.</p>
    <p>If you did not request a password reset, please ignore this email.</p>
    <p>Regards,<br>Your App Team</p>
  `,
});


// Request Password Reset
const requestPasswordReset = async (req, res, next) => {
  try {

    const { email } = requestPasswordResetSchema.parse( req.body);



    if (!email) {
      throw new CustomError("Email is required", 400);
    }

    // Find the user by email
    const user = await prisma.User.findUnique({
      where: { email },
    });

    if (!user) {
      throw new CustomError("User with this email does not exist", 404);
    }

    // Generate reset token

   const resetToken = await GenerateToken.generatePasswordResetToken(user)

    // Save the reset token and expiration in the database

   const updatedUser =   await prisma.User.update({
      where: { user_id: user.user_id },
      data: {
        resetPassword_Token: resetToken,
        resetPassword_Expire: (new Date(Date.now()+ ms(process.env.RESET_TOKEN_EXP )).toString()),
      },
    });

    // Send reset token via email

    
    await sendVerificationEmail(updatedUser.email, createEmailContent(resetToken));


    
    return res.status(200).json({ message: "Reset password link sent" });
  } catch (error) {
    console.error(`${error.message} : ${error.stack}`);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }

    next(new CustomError(error.message || "Error in password reset request", 500));
  }
};

export default requestPasswordReset;