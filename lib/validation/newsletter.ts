import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  // Honeypot — see lib/validation/contact.ts for the rationale.
  website: z.string().max(200).optional().or(z.literal("")),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
