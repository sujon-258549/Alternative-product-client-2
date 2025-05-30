/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadProfileImage } from "../Common/ImageUpload";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import { TProduct } from "@/types/product";
import { recommendedSchema } from "./recommended";
import { categories } from "../product/category";
import {
  useFindOneRecommendedQuery,
  useUpdateMyRecommendedMutation,
} from "@/redux/features/recommended/recommended";

type ProductFormValues = z.infer<typeof recommendedSchema>;

const UpdateRecommended = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { _id } = useParams();
  const {
    data: products,
    isError,
    isLoading: isProductLoading,
  } = useFindOneRecommendedQuery(_id);
  const product = products?.data as TProduct;
  const navigate = useNavigate();
  const [updateProduct] = useUpdateMyRecommendedMutation();
  const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(recommendedSchema),
  });

  // Set form values when product data is loaded
  useEffect(() => {
    if (product) {
      form.reset({
        productName: product?.productName,
        brandName: product?.brandName,
        price: product?.price,
        originalPrice: product?.originalPrice,
        currency: product?.currency,
        description: product?.description,
        shortDescription: product?.shortDescription,
        categories: product?.categories,
        weight: product?.weight,
        isDigital: product?.isDigital ? "yes" : "no",
      });
      if (product.productUrl) {
        setPreviewImage(product.productUrl);
      }
    }
  }, [product, form]);

  if (isError)
    return (
      <div className="text-center py-20 text-red-500 animate-pulse">
        Error loading product
      </div>
    );

  if (isProductLoading)
    return <div className="text-center py-20">Loading product...</div>;

  if (!product)
    return <div className="text-center py-20">Product not found</div>;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCurrentFile(file);
    if (file) {
      form.setValue("productUrl", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    form.setValue("productUrl", undefined);
    setPreviewImage(null);
    setCurrentFile(undefined);
  };

  const onSubmit: SubmitHandler<ProductFormValues> = async (productInfo) => {
    setIsLoading(true);
    const toastId = toast.loading("Updating Product...", { duration: 2000 });
    try {
      let imageUrl = product.productUrl;
      if (currentFile) {
        imageUrl = await uploadProfileImage(currentFile);
      }

      const data = {
        ...productInfo,
        recommendationImage: imageUrl || undefined,
      };

      const productData = {
        id: _id,
        data,
      };
      console.log(productData);
      const res = await updateProduct(productData).unwrap();

      if (res.success) {
        toast.success(res.message || "Product updated successfully!", {
          id: toastId,
          duration: 2000,
        });
        setTimeout(() => navigate("/My-product"), 2000);
      } else {
        throw new Error(res.message || "Product update failed");
      }
    } catch (error: any) {
      console.error("Update error:", error);

      if (error?.code === 11000 || error?.err?.code === 11000) {
        toast.error("Product update conflict. Please try again.", {
          id: toastId,
          duration: 3000,
        });
      } else if (error?.data?.message) {
        toast.error(error.data.message, { id: toastId, duration: 4000 });
      } else {
        toast.error(
          error.message || "Something went wrong. Please try again.",
          {
            id: toastId,
            duration: 4000,
          }
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 flex justify-center items-center bg-gray-900">
      <div className="max-w-4xl w-full mx-4 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400">Update Product</h2>
          <p className="text-gray-300 mt-2">
            Update the details of your product
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">
                      Product Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product name"
                        {...field}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Brand Name */}
              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Brand Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter brand name"
                        {...field}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter price"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Original Price */}
              <FormField
                control={form.control}
                name="originalPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">
                      Original Price
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter original price"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Currency */}
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="BDT">BDT</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="JPY">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Categories */}
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white max-h-96 overflow-y-auto">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Weight */}
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter weight in kg"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Is Digital */}
              <FormField
                control={form.control}
                name="isDigital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">
                      Is Digital Product?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            {/* Short Description */}
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">
                    Short Description
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a short description"
                      {...field}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">
                    Full Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter detailed product description"
                      {...field}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Product Photo */}
            <FormField
              control={form.control}
              name="productUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Product Photo</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="productUrl"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                        ref={field.ref}
                        onBlur={field.onBlur}
                      />
                      <Label
                        htmlFor="productUrl"
                        className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-700 hover:bg-gray-600 transition-colors"
                      >
                        {previewImage ? (
                          <div className="relative h-full w-full">
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="h-full w-full object-contain p-2"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeImage();
                              }}
                              className="absolute cursor-pointer right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                            >
                              <FaTimes size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-4 text-center">
                            <FaFileDownload className="mb-3 text-4xl text-gray-400" />
                            <span className="text-gray-300 font-medium">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-sm text-gray-400 mt-1">
                              PNG, JPG, JPEG (max. 5MB)
                            </span>
                          </div>
                        )}
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Updating Product...
                </span>
              ) : (
                "Update Product"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateRecommended;
