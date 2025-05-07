import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import { shortlistedPartnerEmailContent } from "../../constant/static.js";
const postgresPrisma = new PostgresClient();

import bcrypt from "bcryptjs";
import { emailEmitter } from "../../utils/emailEmitter.js";
import sendEmail from "../../service/emailService.js";
import { Prisma } from "@prisma/client";
// Get all partner applications (admin only)
const getPartners = async (req, res, next) => {
  try {
    // Optional filter parameters
    const {
      status,
      role,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    // Build filter conditions
    const where = {};
    if (status) where.status = status;
    if (role) where.role = role;

    // Sort configuration
    const orderBy = {
      [sortBy]: sortOrder.toLowerCase(),
    };

    // Fetch partner applications with filtering and sorting
    const partners = await postgresPrisma.Partner.findMany({
      where,
      orderBy,
    });

    res.status(200).json({
      success: true,
      count: partners.length,
      partners,
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
            role: true,
          },
        },
      },
    });

    if (!partner) {
      throw new CustomError("Partner application not found", 404);
    }

    res.status(200).json({
      success: true,
      partner,
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
    const adminId = req.user.id;
    const adminRole = req.user.role;

    const { id } = req.params;

    if (!id) {
      throw new CustomError("Partner application ID is required", 400);
    }

    const { status } = req.body;
    const partner = await postgresPrisma.Partner.findUnique({
      where: { id },
    });

    if (!partner) {
      throw new CustomError("Partner application not found", 404);
    }

    if (partner.applicationStatus === "REJECTED") {
      throw new CustomError("This application has already been rejected", 400);
    }
    if (partner.applicationStatus === "APPROVED") {
      throw new CustomError("This application has already been approved", 400);
    }
    if (partner.applicationStatus === "SHORTLISTED") {
      throw new CustomError(
        "This application has already been shortlisted",
        400
      );
    }

    if (
      !status ||
      !["PENDING", "APPROVED", "REJECTED", "SHORTLISTED"].includes(status)
    ) {
      throw new CustomError("Valid status is required", 400);
    }
    if (status === "SHORTLISTED") {
      const tempPassword = generateSecurePassword();
      const hashedPassword = await bcrypt.hash(tempPassword, 10);

      const userAlready = await postgresPrisma.user.findUnique({
        where: { email: partner.email },
      });

      await postgresPrisma.$transaction([
        postgresPrisma.partner.update({
          where: { id },
          data: {
            applicationStatus: "SHORTLISTED",
            reviewedBy: `${adminId}_(${adminRole})`,
          },
        }),

        ...(userAlready
          ? [
              postgresPrisma.user.update({
                where: { email: partner.email },
                data: {
                  role: "PARTNER",
                  wedding_location:partner.cityRegion
                },
              }),
            ]
          : [
              postgresPrisma.user.create({
                data: {
                  email: partner.email,
                  password_hash: hashedPassword,
                  user_name: partner.fullName,
                  role: "PARTNER",
                  phone_number: partner.phoneNumber,
                  wedding_location:partner.cityRegion
                },
              }),
            ]),
      ]);

      await sendEmail(
        partner.email,
        shortlistedPartnerEmailContent(partner.fullName, tempPassword),
      );

      // emailEmitter.emit("sendEmail", {
      //   email: partner.email,
      //   content: shortlistedPartnerEmailContent(partner.fullName, tempPassword),
      // });
      
    } else if (status === "REJECTED") {
      await postgresPrisma.partner.update({
        where: { id },
        data: {
          applicationStatus: "REJECTED",
          reviewedBy: `${adminId}_(${adminRole})`,
        },
      });

      return res.status(200).json({
        success: true,
        message: `Partner application ${id} rejected successfully.`,
      });
    }

    // Optional: handle other statuses (e.g., APPROVED, PENDING)
    return res.status(200).json({
      success: true,
      message: `Partner application ${id} updated to status: ${status}.`,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};


export { getPartners, getPartnerById, updatePartnerStatus };



function generateSecurePassword(length = 8) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  return Array.from({ length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length))
  ).join("");
}
