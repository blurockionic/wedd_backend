import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
const postgresPrisma = new PostgresClient();

// Get all partner applications (admin only)
const getPartners = async (req, res, next) => {
  try {
    // Optional filter parameters
    const { status, role, sortBy = "createdAt", sortOrder = "desc" } = req.query;

    // Build filter conditions
    const where = {};
    if (status) where.status = status;
    if (role) where.role = role;

    // Sort configuration
    const orderBy = {
      [sortBy]: sortOrder.toLowerCase()
    };

    // Fetch partner applications with filtering and sorting
    const partners = await postgresPrisma.PartnerApplication.findMany({
      where,
      orderBy,
      include: {             
        user: {
          select: {
            name: true,
            email: true,
            role: true
          }
        }
      }
    });

    res.status(200).json({
      success: true,
      count: partners.length,
      partners
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

// Get a single partner application by ID (admin only)
const getPartnerById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new CustomError("Partner application ID is required", 400);
    }

    const partner = await postgresPrisma.PartnerApplication.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            role: true
          }
        }
      }
    });

    if (!partner) {
      throw new CustomError("Partner application not found", 404);
    }

    res.status(200).json({
      success: true,
      partner
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

// Update partner application status (admin only)
const updatePartnerStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    if (!id) {
      throw new CustomError("Partner application ID is required", 400);
    }

    if (!status || !['PENDING', 'APPROVED', 'REJECTED', 'SHORTLISTED'].includes(status)) {
      throw new CustomError("Valid status is required", 400);
    }

    const updatedPartner = await postgresPrisma.PartnerApplication.update({
      where: { id },
      data: { 
        status,
        adminNotes: adminNotes || undefined,
        updatedAt: new Date()
      }
    });

    res.status(200).json({
      success: true,
      message: `Partner application status updated to ${status}`,
      partner: updatedPartner
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export { getPartners, getPartnerById, updatePartnerStatus };