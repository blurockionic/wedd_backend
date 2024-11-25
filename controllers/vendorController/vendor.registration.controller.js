import CustomError from "../../utils/CustomError.js";
import sendVerificationEmail from "../../service/emailService.js";
import z from "zod";
import bcrypt from "bcryptjs";
import { vendorSchema } from "../../validation schema/vendor.schema.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
const prisma = new PrismaClient();
import GenerateToken from "../../helper/generateToken.js";
import { vendorRegisterEmailContent } from "../../constant/static.js"

const vendorRegistration = async (req, res, next) => {

    try {
      // Validate vendor input using Zod schema (you can create a vendor schema)
      const validatedData = vendorSchema.parse(req.body);
  
      // Check if the vendor email already exists in the database
      const existingVendor = await prisma.Vendor.findUnique({
        where: { email: validatedData.email },
      });
 
      if (existingVendor) {
        if (existingVendor.is_verified) {
          // Email exists and is already verified
          return res.status(400).json({ message: "Email already exists and is verified." });
        } else {
          // Email exists but is not verified, resend the verification email
          const emailVerificationToken = GenerateToken.generateEmailVerificationToken(existingVendor);
          const emailContent = vendorRegisterEmailContent(emailVerificationToken,"vendor");
  
          await sendVerificationEmail(existingVendor.email, emailContent);
  
          return res.status(200).json({
            message: "Email already exists but not verified. Verification email resent.",
          });
        }
      }
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    

  
      // Create a new vendor in the database
      const newVendor = await prisma.vendor.create({
        data: {
          email: validatedData.email,
          password_hash: hashedPassword, // Store the hashed password
          logo_url: validatedData.logo_url || null, // logo_url is optional
          name: validatedData.name,
          business_name: validatedData.business_name,
          business_category: validatedData.business_category,
          service_type: validatedData.service_type,
          description: validatedData.description,
          phone_number: validatedData.phone_number,
          location: validatedData.location,
          map_location: validatedData.map_location || {}, // map_location is optional
          social_networks: validatedData.social_networks || [], // social_networks is optional
          license_number: validatedData.license_number || "" // license_number is optional
        }
      });
  
      // Generate email verification token and send the email
      const emailVerificationToken = GenerateToken.generateEmailVerificationToken(newVendor);
      const emailContent = vendorRegisterEmailContent(emailVerificationToken,"vendor");
  
      await sendVerificationEmail(newVendor.email, emailContent);
  
      // Exclude sensitive fields before sending the response
      const { password_hash, refresh_Token, resetPassword_Token, resetPassword_Expire, created_at, updated_at, ...vendorResponse } = newVendor;
  
      res.status(201).json({
        message: "Vendor registered successfully. Verification email sent.",
        vendor: vendorResponse,
      });
    } catch (error) {
      console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`);
  
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({ errors: error.errors });
      }
  
      next(new CustomError("An error occurred during vendor registration.", 500));
    }
  };

  export default vendorRegistration;
  