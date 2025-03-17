
import { updateUserSchema } from "../../validation schema/user.schema.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import upload from "../../middleware/multer.middleware.js";

const prisma = new PrismaClient();

const updateUser = async (req, res, next) => {
 
  
  try {
    // Validate user update input using Zod schema
    const validatedData = updateUserSchema.parse(req.body);

    // Extract user email from the authenticated request
    const userEmail = req.user.email ; // Assuming authentication middleware sets user.email


    if (req.file) {
      const profilePhoto = req.file.path; // Multer saves the file and provides the path
      validatedData.profile_photo = profilePhoto;
    }
    // Update the user in the database
    const updatedUser = await prisma.User.update({
      where: { email: userEmail },
      data: validatedData,
    });

    // Exclude sensitive fields before sending the response
    const {
      password_hash,
      refresh_Token,
      resetPassword_Token,
      resetPassword_Expire,
      created_at,
      updated_at,
      ...userResponse
    } = updatedUser;

    res.status(200).json({
      message: "User updated successfully.",
      user: userResponse,
      success:true
    });
  } catch (error) {
    
    next();
  }
};

export default updateUser;
export const uploadMiddleware = upload.single("profile_photo");
