import { z } from "zod";

// Define Zod schema matching your product interface
export const productSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  brandName: z.string().min(1, "Brand name is required"),
  price: z.number().min(0, "Price must be positive"),
  originalPrice: z.number().min(0, "Original price must be positive"),
  currency: z.string().min(1, "Currency is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  productUrl: z.instanceof(File).optional(),
  shortDescription: z
    .string()
    .min(5, "Short description must be at least 5 characters"),
  isInStock: z.boolean(),
  categories: z.string().min(1, "Category is required"),
  weight: z.number().min(0, "Weight must be positive"),
  isDigital: z.string().min(1, "Please specify if product is digital"),
});
