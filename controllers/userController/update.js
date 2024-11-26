import CustomError from "../../utils/CustomError.js";
import z from "zod";
import { updateUserSchema } from "../../validation schema/user.schema.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const updateUser = async (req, res, next) => {
  try {
    // Validate user update input using Zod schema
    const validatedData = updateUserSchema.parse(req.body);

    // Extract user email from the authenticated request
    const userEmail = req.user.email ; // Assuming authentication middleware sets user.email

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
    });
  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`);

    if (error.code === "P2025") {
      // Handle case where user does not exist
      return next(new CustomError("User not found.", 404));
    }

    if (error instanceof z.ZodError) {
      // Handle validation errors
      return res.status(400).json({ errors: error.errors });
    }

    next(new CustomError("An error occurred during user update.", 500));
  }
};

export default updateUser;
