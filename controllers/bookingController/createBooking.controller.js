import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import { createBookingSchema } from "../../validation schema/booking.schema.js";
import CustomError from "../../utils/CustomError.js";

// Initialize Prisma Clients
const mongoPrisma = new MongoClient();
const postgresPrisma = new PostgresClient();

export const createBooking = async (req, res) => {
  try {
    // Parse and validate the request body
    const {
      serviceId,
      vendorId,
      bookingDate,
      userId,
      isNegotiable,
      negotiatedPrice,
      totalAmount,
    } = createBookingSchema.parse(req.body);

    

    
    // Start Prisma $transaction for MongoDB and PostgreSQL
    const booking = await postgresPrisma.$transaction(async (transactionClient) => {
      // Validate service and vendor from MongoDB
      const service = await mongoPrisma.Service.findUnique({
        where: { id: serviceId },
      });
      if (!service) throw new CustomError("Service not found", 404);

      const vendor = await mongoPrisma.Vendor.findUnique({
        where: { id: vendorId },
      });
      if (!vendor) throw new CustomError("Vendor not found", 404);

      // Validate pricing logic
      let finalPrice = totalAmount;
      if (isNegotiable) {
        if (!negotiatedPrice) {
          throw new CustomError("Negotiated price must be provided for negotiable bookings.", 400);
        }
        finalPrice = negotiatedPrice;
      } else if (service.price) {
        finalPrice = service?.price;
      }

      // Create the booking in PostgreSQL
      return transactionClient.Booking.create({
        data: {
          user: { connect: { id: userId } },  
          vendor: { connect: { id: vendorId } },
          service: { connect: { id: serviceId } },
          booking_date: bookingDate,
          status: "pending",
          is_negotiable: isNegotiable,
          negotiated_price: isNegotiable ? negotiatedPrice : null,
          totalAmount: finalPrice,
          payments: {
            create: {
              amount: finalPrice,
              payment_status: "pending",
              payment_method: "credit card", // Hardcoded for now
              transaction_id: `txn_${Date.now()}`,
              payment_date: new Date(),
            },
          },
        },
      });
    });

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
};
