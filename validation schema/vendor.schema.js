import { z } from 'zod';

// Password validation
export const passwordValidation = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
  .regex(/\d/, { message: 'Password must include at least one number' })
  .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: 'Password must include at least one special character' })
  .max(128, { message: 'Password must not exceed 128 characters' });

// Vendor schema
export const vendorSchema = z.object({
  name: z.string()
    .min(1, { message: 'Name is required' })
    .transform((val) => val.toLowerCase()),
  business_name: z.string()
    .min(1, { message: 'Business name is required' })
    .transform((val) => val.toLowerCase()),
  business_category: z.string()
    .min(1, { message: 'Business category is required' })
    .transform((val) => val.toLowerCase()),
  license_number: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  service_type: z.array(
    z.string().transform((val) => val.toLowerCase())
  ).min(1, { message: 'At least one service type is required' }),
  description: z.string()
    .min(1, { message: 'Description is required' })
    .transform((val) => val.toLowerCase()),
  logo_url: z.string()
    .url({ message: 'Invalid URL format for logo' })
    .nullable()
    .optional(),
  location: z.string()
    .min(1, { message: 'Location is required' })
    .transform((val) => val.toLowerCase()),
  email: z.string()
    .email({ message: 'Invalid email address' })
    .transform((val) => val.toLowerCase()),
  password: passwordValidation,
  phone_number: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits long' })
    .regex(/^\d+$/, { message: 'Phone number must only contain digits' }),
  map_location: z
    .object({
      lat: z.number({ message: 'Latitude must be a number' }),
      lng: z.number({ message: 'Longitude must be a number' }),
    })
    .optional(),
  social_networks: z
    .record(
      z.string()
        .min(1)
        .transform((val) => val.toLowerCase()),
      z.string()
        .url({ message: 'Invalid URL' })
    )
    .optional(),
  services: z.array(z.string().transform((val) => val.toLowerCase())).optional(),
  promotions: z.array(z.string().transform((val) => val.toLowerCase())).optional(),
  team_members: z.array(z.string().transform((val) => val.toLowerCase())).optional(),
  faqs: z.array(z.string().transform((val) => val.toLowerCase())).optional(),
  reviews: z.array(z.string().transform((val) => val.toLowerCase())).optional(),
});

export const vendorUpdateSchema = z.object({
  email: z.string()
    .email({ message: 'Invalid email address' })
    .optional()
    .transform((val) => val?.toLowerCase()),
  name: z.string()
    .min(1, { message: 'Name must not be empty' })
    .optional()
    .transform((val) => val?.toLowerCase()),
  business_name: z.string()
    .min(1, { message: 'Business name must not be empty' })
    .optional()
    .transform((val) => val?.toLowerCase()),
  business_category: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  service_type: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  description: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  phone_number: z.string().optional(),
  location: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  map_location: z.object({}).optional(),
  social_networks: z
    .array(z.string().transform((val) => val.toLowerCase()))
    .optional(),
  license_number: z.string()
    .optional()
    .transform((val) => val?.toLowerCase()),
  logo_url: z.string().url().optional(),
});
