import { z } from "zod";

export const contactValidationSchema = z.object({
  body: z.object({
    sendId: z.string().min(10, "Sender ID must be at least 10 characters"),
    message: z
      .string()
      .min(20, "Message must be at least 20 characters")
      .max(1000, "Message cannot exceed 1000 characters"),
  }),
});
