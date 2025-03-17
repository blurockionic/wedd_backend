import { PrismaClient } from "../../prisma/generated/postgres/index.js"; // Prisma client for database operations
import CustomError from "../../utils/CustomError.js"; // Custom error handler utility

const prisma = new PrismaClient();

const deleteUserAccount = async (req, res, next) => {
  try {
    // Extract user ID from request object (assumes authentication middleware sets it)
    const id = req.user.id;
    

    // Find the user in the database
    const user = await prisma.User.findUnique({
      where: { id: id },
    });

    if (!user) {
      // User not found, throw a CustomError
      throw new CustomError("User not found.", 404);
    }

//   Delete the user from the database
    await prisma.User.delete({
      where: { id: id },
    });

    // Step 4: Return a success response
    res.status(200).json({
      message: "User account deleted successfully.",
    });
  } catch (error) {
   

    next(error); // Pass error to global error handler
  }
};

export default deleteUserAccount;
