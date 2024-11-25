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
  name: z.string().min(1, { message: 'Name is required' }),
  business_name: z.string().min(1, { message: 'Business name is required' }),
  business_category: z.string().min(1, { message: 'Business category is required' }),
  license_number: z.string().optional(),
  service_type: z.array(z.string()).min(1, { message: 'At least one service type is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  logo_url: z.string().url({ message: 'Invalid URL format for logo' }).nullable().optional(),
  location: z.string().min(1, { message: 'Location is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
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
    .optional()
  
    ,
  social_networks: z
    .record(z.string().min(1), z.string().url({ message: 'Invalid URL' }))
    .optional(),
  services: z.array(z.string()).optional(),
  promotions: z.array(z.string()).optional(),
  team_members: z.array(z.string()).optional(),
  faqs: z.array(z.string()).optional(),
  reviews: z.array(z.string()).optional(),
});
