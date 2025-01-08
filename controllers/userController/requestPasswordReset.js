
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import CustomError from "../../utils/CustomError.js";
import { requestPasswordResetSchema } from "../../validation schema/user.schema.js";
import GenerateToken from "../../helper/generateToken.js";
import sendVerificationEmail from "../../service/emailService.js";
import { resetPassEmailContent } from "../../constant/static.js";

const prisma = new PrismaClient();
// Request Password Reset
 const requestPasswordReset = async (req, res, next) => {

  const { email } = requestPasswordResetSchema.parse(req.body);


  try {

   
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
   console.log(user);
   

   console.log(resetToken);
   
    
    await sendVerificationEmail(email, resetPassEmailContent(resetToken));


    
    res.status(200).json({
      success: true,
      message: "Reset password link sent successfully",
    });
  } catch (error) {
    next(error)
};
 }
export default requestPasswordReset;