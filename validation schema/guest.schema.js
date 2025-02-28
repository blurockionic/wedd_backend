import z from "zod";
export const GuestSchema = z.object({
  status: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const GuestUpdateSchema = GuestSchema.partial()
