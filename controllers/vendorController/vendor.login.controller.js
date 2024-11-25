import { loginSchema } from "../../validation schema/user.schema.js";
import GenerateToken from "../../helper/generateToken.js";
import z from "zod";
import bcrypt from "bcryptjs";
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import sendVerificationEmail from "../../service/emailService.js";
import { vendorRegisterEmailContent } from "../../constant/static.js";

const prisma = new PrismaClient();

const vendorLogin = async (req, res, next) => {
  try {
    // Validate request body against login schema
    const validatedData = loginSchema.parse(req.body);

    // Find vendor by email
    const vendor = await prisma.Vendor.findUnique({
      where: { email: validatedData.email },
    });

    // If vendor not found, throw an error
    if (!vendor) {
      throw new CustomError("Vendor not found with this email", 404);
    }

    // Check if the password is correct
    if (!isPasswordCorrect(validatedData.password, vendor.password_hash)) {
      throw new CustomError("Invalid password", 401);
    }

    // Check if the vendor's email is verified
    if (!vendor.isVerified) {
        const emailVerificationToken = GenerateToken.generateEmailVerificationToken(vendor);
      const emailContent = vendorRegisterEmailContent(emailVerificationToken,"vendor")
  
      await sendVerificationEmail(vendor.email, emailContent);
        
      throw new CustomError("Your email is not verified. Please check your mail for verifiaction.", 400);

    }

    // Generate access and refresh tokens
    const accessToken = await GenerateToken.generateAccessToken(vendor);
    const refreshToken = await GenerateToken.generateRefreshToken(vendor);

    // Save refresh token to the database
    await prisma.Vendor.update({
      where: { id: vendor.id },
      data: { refresh_Token: refreshToken },
    });

    // Sanitize user object to exclude sensitive fields
    const { password_hash, resetPassword_Token, updated_at, created_at, ...sanitizedVendor } = vendor;

    // Cookie options for security
    const cookieOptions = {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    };

    // Send response with cookies and vendor data
    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({
        message: "Login successful",
        accessToken,
        vendor: sanitizedVendor,
      });
  } catch (error) {
    console.error(`${error.message} : ${error.stack}`);
    
    // Handle validation errors (Zod)
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    
    // Handle custom errors
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    // Handle generic errors
    next(new CustomError("Something went wrong during login.", 500));
  }
};

// Function to check if the password is correct
const isPasswordCorrect = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export default vendorLogin;
