
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import CustomError from "../../utils/CustomError.js";
import { requestPasswordResetSchema } from "../../validation schema/user.schema.js";
import GenerateToken from "../../helper/generateToken.js";
import sendVerificationEmail from "../../service/emailService.js";
import ms from 'ms';
import z from "zod";
import jwt from "jsonwebtoken";
import { resetPassEmailContent } from "../../constant/static.js";

const prisma = new PrismaClient();




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
      where: { id: user.id },
      data: {
        resetPassword_Token: resetToken,
        resetPassword_Expire: (new Date(Date.now()+ ms(process.env.RESET_TOKEN_EXP )).toString()),
      },
    });

    // Send reset token via email

    
    await sendVerificationEmail(updatedUser.email, resetPassEmailContent(resetToken));


    
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