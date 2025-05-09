import CustomError from "../../utils/CustomError.js";
import sendEmail from "../../service/emailService.js";
import bcrypt from "bcryptjs";
import { userSchema } from "../../validation schema/user.schema.js";

import GenerateToken from "../../helper/generateToken.js";
import { registerEmailContent } from "../../constant/static.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";  

const prisma = new PostgresClient();


const userRegistration = async (req, res, next) => {
  try {
    // Validate user input using Zod schema
    const validatedData = userSchema.parse(req.body);

    // Check if the email already exists in the database
    const existingUser = await prisma.User.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      if (existingUser.is_verified) {
        // Email exists and is already verified
        return res
          .status(400)
          .json({ message: "Email already exists and is verified." });
      } else {
        // Email exists but is not verified, resend the verification email
        const emailVerificationToken =
          GenerateToken.generateEmailVerificationToken(existingUser);
        const emailContent = registerEmailContent(
          emailVerificationToken,
          existingUser.role
        );

        await sendEmail(existingUser.email, emailContent);

        return res.status(200).json({
          message:
            "Email already exists but not verified. Verification email resent.",
        });
      }
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(validatedData.password, 10); // 10 salt rounds for security/performance

    // Create a new user in the database
    const newUser = await prisma.User.create({
      data: {
        email: validatedData.email,
        password_hash: hashedPassword,
        user_name: validatedData.user_name,
        phone_number: validatedData.phone_number,
        role: validatedData.role,
        wedding_date: validatedData.wedding_date,
        wedding_location: validatedData.wedding_location,
      },
    });

    // Generate email verification token and send the email
    const emailVerificationToken =
      GenerateToken.generateEmailVerificationToken(newUser);
    const emailContent = registerEmailContent(
      emailVerificationToken,
      validatedData.role
    );

    await sendEmail(newUser.email, emailContent);

    // Exclude sensitive fields before sending the response
    const {
      password_hash,
      refresh_Token,
      resetPassword_Token,
      resetPassword_Expire,
      created_at,
      updated_at,
      ...userResponse
    } = newUser;

    res.status(201).json({
      message: "User registered successfully. Verification email sent.",
      user: userResponse,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export default userRegistration;
