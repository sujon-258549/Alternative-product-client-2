import { z } from "zod";

export const updateRegisterSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  role: z.enum(["admin", "user"]),
  address: z.object({
    village: z.string().min(1, "Village is required"),
    district: z.string().min(1, "District is required"),
    subDistrict: z.string().min(1, "Sub-district is required"),
    post: z.string().min(1, "Post is required"),
    postCode: z.string().min(4, "Post code must be at least 4 characters"),
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  profileImage: z.instanceof(File).optional(),
  gender: z.enum(["male", "female", "other"]),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 digits")
    .regex(/^\d+$/, "Must contain only numbers"),
  secondaryPhone: z
    .string()
    .regex(/^\d*$/, "Must contain only numbers")
    .optional(),
  socialMesaLink: z.object({
    facebook: z
      .string()
      .url("Must be a valid URL")
      .or(z.literal(""))
      .optional(),
    instagram: z
      .string()
      .url("Must be a valid URL")
      .or(z.literal(""))
      .optional(),
    twitter: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
    linkedin: z
      .string()
      .url("Must be a valid URL")
      .or(z.literal(""))
      .optional(),
  }),
  nidNumber: z.string().regex(/^\d*$/, "Must contain only numbers").optional(),
});
