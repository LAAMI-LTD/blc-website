import { z } from "zod";

// Basic Kenyan-friendly phone check: optional, but if provided must look
// like a real phone number (digits, spaces, +, -, parentheses; 7-15 digits).
const phoneRegex = /^[0-9+\-()\s]{7,20}$/;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .refine((val) => !val || phoneRegex.test(val), "Please enter a valid phone number."),
  subject: z.string().trim().max(200).optional(),
  department: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message (10+ characters).")
    .max(3000, "Message is too long."),
  // Honeypot — should stay empty for real users. Deliberately NOT
  // constrained to length 0 here: we want it to pass validation so the
  // route handler can silently discard bot submissions with a fake
  // "success" response, instead of leaking the honeypot's existence via
  // a validation error a bot could parse and learn from.
  companyWebsite: z.string().max(200).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
