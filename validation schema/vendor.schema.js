import { z } from "zod";

// Password validation
export const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .regex(/[a-z]/, {
    message: "Password must include at least one lowercase letter",
  })
  .regex(/[A-Z]/, {
    message: "Password must include at least one uppercase letter",
  })
  .regex(/\d/, { message: "Password must include at least one number" })
  .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
    message: "Password must include at least one special character",
  })
  .max(128, { message: "Password must not exceed 128 characters" });

// Address Schema

// Vendor schema
export const vendorSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .transform((val) => val.toLowerCase()),
  business_name: z
    .string()
    .min(1, { message: "Business name is required" })
    .transform((val) => val.toLowerCase()),
  business_category: z
    .string()
    .min(1, { message: "Business category is required" })
    .transform((val) => val.toLowerCase()),
  license_number: z.string().optional().or(z.literal("")), // Accept empty strings
  service_type: z
    .array(z.string().transform((val) => val.toLowerCase()))
    .min(1, { message: "At least one service type is required" }),
  description: z.string().optional().or(z.literal("")), // Accept empty strings
  logo_url: z
    .union([
      z.string().url({ message: "Invalid URL format for logo" }),
      z.string().length(0), // Accept empty string
      z.object({}).optional(), // Accept empty object
    ])
    .optional(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .transform((val) => val.toLowerCase()),
  password: passwordValidation,
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .regex(/^\d+$/, { message: "Phone number must only contain digits" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  latitude: z
    .string()
    .regex(/^[-+]?\d*\.?\d+$/, { message: "Invalid latitude format" }).optional(),
  longitude: z
    .string()
    .regex(/^[-+]?\d*\.?\d+$/, { message: "Invalid longitude format" }).optional(),
  social_networks: z
    .object({
      facebook: z
        .string()
        .url({ message: "Invalid URL for Facebook" })
        .or(z.literal("")),
      instagram: z
        .string()
        .url({ message: "Invalid URL for Instagram" })
        .or(z.literal("")),
    })
    .optional(),
});

export const vendorSchemaUpdate = vendorSchema.partial();
