import jwt from 'jsonwebtoken';
import { PrismaClient as PostgresPrismaClient } from '../prisma/generated/postgres/index.js';
import { PrismaClient as MongoPrismaClient } from '../prisma/generated/mongo/index.js';
import CustomError from '../utils/CustomError.js';

const postgresPrisma = new PostgresPrismaClient();
const mongoPrisma = new MongoPrismaClient();

const verifyEmail = async (req, res, next) => {
  try {
    // Extract token and entity type from query params
    const { token, entityType } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Token is required in query parameters." });
    }

    if (!entityType) {
      return res.status(400).json({ message: "Entity type is required in query parameters." });
    }
    
    const entityLower = entityType.toLowerCase();

    if (!['user', 'vendor'].includes(entityLower)) {
      return res.status(400).json({ message: "Invalid entity type provided." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.EMAIL_TOKEN_SECRET);
   

    // Determine the correct database and model
    const prismaClient = entityLower === 'user' ? postgresPrisma : mongoPrisma;
    const modelName = entityLower === 'user' ? 'User' : 'Vendor';

    // Find the entity in the database using a specific field (e.g., email)
    const entity = await prismaClient[modelName].findUnique({
      where: { email: decoded.email }, // Use the concrete field name (e.g., email)
    });

    if (!entity) {
      return res.status(400).json({ message: `${entityLower} not found or invalid token.` });
    }

    // Check if already verified
    if (entity.is_verified) {
      return res.status(200).json({ message: `${entityLower} email is already verified.` });
    }

    // Update verification status
    await prismaClient[modelName].update({
      where: { email: decoded.email }, // Use the same field name
      data: { is_verified: true },
    });

    res.status(200).json({ message: `${entityLower} email verified successfully.` });
  } catch (error) {
    console.error("Error during email verification:", error.message);
    return next(new CustomError(`Verification failed: ${error.message}`, 400));
  }
};

export default verifyEmail;
