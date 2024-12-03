import { z } from "zod";



export  const createBookingSchema = z.object({
    serviceId: z.string(),
    vendorId: z.string(),
    bookingDate: z.string().refine((dateString) => !isNaN(Date.parse(dateString)), {
        message: "Invalid date format",
      }).transform((dateString) => new Date(dateString)),
    userId: z.string(),
    isNegotiable: z.boolean().optional().default(false), // Default to false if not provided
    negotiatedPrice: z.number().min(0).optional(), // Optional for negotiable cases
    totalAmount: z.number().min(0),
  });