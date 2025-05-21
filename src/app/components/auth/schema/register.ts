import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be 6+ characters"),
    confirmPassword: z.string().min(6, "Password must be 6+ characters"),
    role: z.enum(["admin", "user"]),
    address: z.object({
      village: z.string().min(1, "Required"),
      district: z.string().min(1, "Required"),
      subDistrict: z.string().min(1, "Required"),
      post: z.string().min(1, "Required"),
      postCode: z.string().min(4, "Must be 4+ characters"),
    }),
    dateOfBirth: z.string().min(1, "Required"),
    gender: z.enum(["male", "female", "other"]),
    phone: z
      .string()
      .min(11, "Must be 11+ digits")
      .regex(/^\d+$/, "Numbers only"),
    secondaryPhone: z.string().optional(),
    socialMesaLink: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
    }),
    nidNumber: z.string().optional(),
    isBlock: z.boolean().optional(),
    isDelete: z.boolean().optional(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords or confirm password don't match",
    path: ["confirmPassword"], // This attaches the error to confirmPassword field
  });
