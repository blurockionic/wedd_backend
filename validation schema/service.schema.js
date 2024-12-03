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



export const querySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1), // Coerce to number for page
  limit: z.coerce.number().int().positive().optional().default(10), // Coerce to number for limit
  service_type: z.string().optional(),
  minPrice: z.coerce.number().optional(), // Coerce string to number for minPrice
  maxPrice: z.coerce.number().optional(), // Coerce string to number for maxPrice
  rating: z.coerce.number().optional(), // Coerce string to number for rating
  sort_by: z.enum(['created_at', 'min_price', 'rating']).optional().default('created_at'), // Ensure valid enum values
  sort_order: z.enum(['asc', 'desc']).optional().default('desc'),
  vendor_name: z.string()
    .min(1, { message: 'Name must not be empty' })
    .optional()
    .transform((val) => val?.toLowerCase()), // Transform vendor_name to lowercase
});



export const updateServiceSchema = serviceCreateSchema.partial(); // Make all fields optional for updates
