import jwt from 'jsonwebtoken';
import { PrismaClient } from '../prisma/generated/postgres/index.js';
import CustomError from '../utils/CustomError.js';

const prisma = new PrismaClient();

const verifyEmail = async (req, res, next) => {
    
  try {
    // Extract the token from the query params
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.EMAIL_TOKEN_SECRET);  
    

   // Find the user by the ID from the token
    const user = await prisma.User.findUnique({
      where: { user_id: decoded.user_id},
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    // Check if the user is already verified
    if (user.isVerified) {
      return res.status(200).json({ message: "Email is already verified." });
    }

    // Update the user's verification status
    await prisma.User.update({
      where: { user_id: decoded.user_id },
      data: { isVerified: true },
    });

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error.message)
    return next(new CustomError(`Verification failed ${error.message}`, 400));
  }
};

export default verifyEmail
