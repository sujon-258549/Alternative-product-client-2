/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { registerSchema } from "./schema/register";
import { RegistrationTerms } from "./RegistrationTerms";
import { Label } from "@/components/ui/label";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import { uploadProfileImage } from "../Common/ImageUpload";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{
    loading: boolean;
    error?: string;
    url?: string;
  }>({ loading: false });

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
      address: {
        village: "",
        district: "",
        subDistrict: "",
        post: "",
        postCode: "",
      },
      dateOfBirth: "",
      gender: "male",
      phone: "",
      profileImage: undefined,
      secondaryPhone: "",
      socialMesaLink: {
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
      },
      nidNumber: "",
      acceptTerms: true,
    },
  });

  const [currentFile, serCurrentFile] = useState<File | undefined>(undefined);
  const [userRegistered] = useRegisterUserMutation();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    serCurrentFile(file);
    if (file) {
      form.setValue("profileImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    form.setValue("profileImage", undefined);
    setPreviewImage(null);
  };
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...", { duration: 2000 });

    try {
      let imageUrl = "";
      if (currentFile) {
        imageUrl = await uploadProfileImage(currentFile);
      }

      const registrationData = {
        ...data,
        profileImage: imageUrl || undefined, // Explicit undefined if no image
      };

      const res = await userRegistered(registrationData).unwrap();

      if (res.success) {
        toast.success(res.message || "Registration successful!", {
          id: toastId,
          duration: 2000,
        });
        setTimeout(() => navigate("/login"), 2000); // Redirect after success
      } else {
        throw new Error(res.message || "Registration failed");
      }
    } catch (error: any) {
      console.error("Registration error:", error);

      // Handle MongoDB duplicate key error (email already exists)
      if (error?.code === 11000 || error?.err?.code === 11000) {
        toast.error("Email already registered. Please use a different email.", {
          id: toastId,
          duration: 4000,
        });
      }
      // Handle API error response
      else if (error?.data?.message) {
        toast.error(error.data.message, { id: toastId, duration: 4000 });
      }
      // Generic fallback
      else {
        toast.error(
          error.message || "Something went wrong. Please try again.",
          {
            id: toastId,
            duration: 4000,
          }
        );
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white">
      <Card
        style={{ boxShadow: "1px 1px 20px #fff" }}
        className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
      >
        {/* Header with gradient */}
        <CardHeader className="border-b p-8 text-white">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <img src="./logo.png" alt="" className="w-20 object-contain" />
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">
                  Create Your Account
                </h1>
                <p className="mt-2 opacity-90">
                  Join our community in just a few steps
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white text-blue-800">
              Secure
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-8 bg-gray-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Info Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                    1
                  </span>
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="email@example.com"
                            {...field}
                            type="email"
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Date of Birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Gender</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full py-1.5 bg-gray-700 px-2.5 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Enter Your Password"
                              {...field}
                              type={showPassword ? "text" : "password"}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-5 w-5" />
                              ) : (
                                <EyeIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Confirm Your Password"
                              {...field}
                              type={showConfirmPassword ? "text" : "password"}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOffIcon className="h-5 w-5" />
                              ) : (
                                <EyeIcon className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                    2
                  </span>
                  Address Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address.village"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Village</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter village"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">District</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter district"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.subDistrict"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Sub-District
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter sub-district"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.post"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Post</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter post"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.postCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Post Code</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter post code"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                    3
                  </span>
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="01XXXXXXXXX"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="secondaryPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Secondary Phone (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="01XXXXXXXXX"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nidNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          NID Number (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter NID number"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Social Media Section */}
                <div className="space-y-4">
                  <h4 className="font-medium">Social Media Links (Optional)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="socialMesaLink.facebook"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <FacebookIcon className="w-5 h-5 mr-2 text-blue-600" />
                            Facebook
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://facebook.com/username"
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="socialMesaLink.instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <InstagramIcon className="w-5 h-5 mr-2 text-pink-600" />
                            Instagram
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://instagram.com/username"
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="socialMesaLink.twitter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <TwitterIcon className="w-5 h-5 mr-2" />
                            Twitter
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://twitter.com/username"
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="socialMesaLink.linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <LinkedinIcon className="w-5 h-5 mr-2 text-blue-700" />
                            LinkedIn
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://linkedin.com/in/username"
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10 bg-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Profile Photo */}
                <FormField
                  control={form.control}
                  name="profileImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">
                        Profile Photo
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                            ref={field.ref}
                            onBlur={field.onBlur}
                          />
                          <Label
                            htmlFor="profileImage"
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
                                  className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
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
                {/* Terms and Submit */}
                <div className="space-y-6 pt-4">
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-yellow-300 mt-1 data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            I agree to the{" "}
                            <button
                              type="button"
                              className="text-yellow cursor-pointer hover:underline font-medium"
                              onClick={(e) => {
                                e.preventDefault();
                                // Open terms modal here
                              }}
                            >
                              <RegistrationTerms />
                            </button>
                          </FormLabel>
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full text-black bg-yellow cursor-pointer hover:bg-yellow-600"
                    size="lg"
                    disabled={uploadStatus.loading}
                  >
                    {uploadStatus.loading
                      ? "Creating Account..."
                      : "Create Account"}
                  </Button>
                  {uploadStatus.error && (
                    <p className="text-red-500 text-sm">{uploadStatus.error}</p>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="p-6 border-t">
          <p className="text-center text-sm w-full">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-yellow hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

// Icon components
const EyeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default Register;
