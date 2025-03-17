import { PrismaClient } from '../../prisma/generated/mongo/index.js';
import CustomError from '../../utils/CustomError.js';

const prisma = new PrismaClient();

const getVendorById = async (req, res, next) => {
  try {
    const vendorId = req.params.id;

   
    const vendor = await prisma.Vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      throw new CustomError('Vendor not found', 404);
    }

    const { email,phone_number,created_at,updated_at,password_hash, refresh_Token, resetPassword_Token, ...sanitizedVendor } = vendor;

    res.status(200).json(sanitizedVendor );
  } catch (error) {
    next(error);
  }
};

export default getVendorById;
