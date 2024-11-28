import { z } from "zod";

export const serviceCreateSchema = z.object({
  service_name: z
    .string()
    .min(3, "Service name must be at least 3 characters.").transform((val) => val.toLowerCase()),
  description: z.string().optional().transform((val) => val.toLowerCase()), // Optional field
  min_price: z
    .number()
    .positive("Minimum price must be a positive number.")
    .int("Minimum price must be an integer.").optional(), // Optional: Ensure it's an integer
  max_price: z
    .number()
    .positive("Maximum price must be a positive number.")
    .int("Maximum price must be an integer.") // Optional: Ensure it's an integer
    .refine((data) => data > 0, {
      message: "Maximum price must be greater than minimum price.",
      path: ["max_price"], // Corrected path
    }).optional()
    ,
  service_type: z.string().min(3, "Service type must be at least 3 characters.").transform((val) => val.toLowerCase()),
});

export const updateServiceSchema = serviceCreateSchema.partial(); // Make all fields optional for updates
