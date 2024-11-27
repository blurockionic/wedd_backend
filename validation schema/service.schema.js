import {z} from "zod"
export const serviceCreateSchema = z.object({
    service_name: z.string().min(3, "Service name must be at least 3 characters."),
    description: z.string().optional(),
    price: z.object({
      minimum: z.number().positive("Minimum price must be a positive number."),
      maximum: z.number().positive("Maximum price must be a positive number."),
    }).refine(data => data.maximum > data.minimum, {
      message: "Maximum price must be greater than minimum price.",
      path: ["maximum"],
    }),
    service_type: z.string(),
  });

  export const updateServiceSchema = serviceCreateSchema.partial();