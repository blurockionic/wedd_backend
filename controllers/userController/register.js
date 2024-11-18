import CustomError from "../../utils/CustomError.js";
import { userSchema } from "../../validation schema/user.schema.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import sendVerificationEmail from "../../service/emailService.js";
import z from "zod";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const userRegistration = async (req, res, next) => {
  try {
    // Validate user input using Zod schema
    const validatedData = userSchema.parse(req.body);

    // Check if the email already exists in the database
    const existingUser = await prisma.User.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      if (existingUser.isVerified) {
        // Email exists and is already verified
        return res
          .status(400)
          .json({ message: "Email already exists and is verified." });
      } else {
        // Email exists but is not verified, resend the verification email
        await sendVerificationEmail(existingUser.email, existingUser.user_id);
        return res.status(200).json({
          message:
            "Email already exists but not verified. Verification email resent.",
        });
      }
    }


    // Hash the password before storing it in the database
    const saltRounds = 10; // Adjust based on your security/performance balance
    const hashedPassword = await bcrypt.hash(
      validatedData.password_hash,
      saltRounds
    );

    const newUser = await prisma.User.create({
      data: {
        email: validatedData.email,
        password_hash: hashedPassword,
        first_name: validatedData.first_name,
        last_name: validatedData.last_name,
        phone_number: validatedData.phone_number,
        role: validatedData.role,
        wedding_date: validatedData.wedding_date,
        wedding_location: validatedData.wedding_location,
      },
    });

    // Send verification email for the newly registered user
    await sendVerificationEmail(newUser.email, newUser.user_id);

    // Exclude sensitive fields before sending the response
    const { password_hash, resetPasswordToken,resetPasswordExpire,updated_at,created_at, ...userResponse } = newUser;

    res.status(201).json({
      message: "User registered successfully. Verification email sent.",
      user: userResponse,
    });
  } catch (error) {
    console.error(`${error.message} : ${error.stack}`);

    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
      return next(new CustomError("Invalid input data", 400));
    }
    next(error);
  }
};



export default userRegistration