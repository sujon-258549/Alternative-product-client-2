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
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import { uploadProfileImage } from "../Common/ImageUpload";
import {
  useGetMeQuery,
  useUpdateUserMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { updateRegisterSchema } from "./schema/updateregister";

type UpdateProfileFormValues = {
  fullName: string;
  role: "admin" | "user";
  address: {
    village: string;
    district: string;
    subDistrict: string;
    post: string;
    postCode: string;
  };
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  phone: string;
  profileImage?: File;
  secondaryPhone?: string;
  socialMesaLink: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  nidNumber?: string;
};

const UpdateProfile = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{
    loading: boolean;
    error?: string;
    url?: string;
  }>({ loading: false });

  const { data: getMe, isLoading } = useGetMeQuery(undefined);
  const user = getMe?.data;
  const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateRegisterSchema),
    defaultValues: {
      fullName: "",
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
      secondaryPhone: "",
      socialMesaLink: {
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
      },
      nidNumber: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        fullName: user.fullName || "",
        role: user.role || "user",
        address: {
          village: user.address?.village || "",
          district: user.address?.district || "",
          subDistrict: user.address?.subDistrict || "",
          post: user.address?.post || "",
          postCode: user.address?.postCode || "",
        },
        dateOfBirth: user.dateOfBirth || "",
        gender: user.gender || "male",
        phone: user.phone ? String(user.phone) : "",
        profileImage: undefined,
        secondaryPhone: user.secondaryPhone ? String(user.secondaryPhone) : "",
        socialMesaLink: {
          facebook: user.socialMesaLink?.facebook || "",
          instagram: user.socialMesaLink?.instagram || "",
          twitter: user.socialMesaLink?.twitter || "",
          linkedin: user.socialMesaLink?.linkedin || "",
        },
        nidNumber: user.nidNumber ? String(user.nidNumber) : "",
      });

      if (user.profileImage) {
        setPreviewImage(user.profileImage);
      }
    }
  }, [user, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setCurrentFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      form.setValue("profileImage", file);
      form.clearErrors("profileImage");
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setCurrentFile(undefined);
    form.setValue("profileImage", undefined);
  };

  const onSubmit: SubmitHandler<UpdateProfileFormValues> = async (data) => {
    const toastId = toast.loading("Updating profile...", { duration: 2000 });

    try {
      let imageUrl = user?.profileImage || "";
      if (currentFile) {
        setUploadStatus({ loading: true });
        imageUrl = await uploadProfileImage(currentFile);
        setUploadStatus({ loading: false, url: imageUrl });
      }

      const updateData = {
        ...data,
        phone: Number(data.phone),
        secondaryPhone: data.secondaryPhone
          ? Number(data.secondaryPhone)
          : undefined,
        nidNumber: data.nidNumber ? Number(data.nidNumber) : undefined,
        profileImage: imageUrl,
      };

      const res = await updateUser(updateData).unwrap();

      if (res.success) {
        toast.success(res.message || "Profile updated successfully!", {
          id: toastId,
          duration: 2000,
        });
        setTimeout(() => navigate("/profile"), 2000);
      } else {
        throw new Error(res.message || "Update failed");
      }
    } catch (error: any) {
      console.error("Update error:", error);
      setUploadStatus({ loading: false, error: error.message });

      if (error?.data?.message) {
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
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white">
      <Card className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <CardHeader className="border-b p-8 text-white">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <img src="./logo.png" alt="" className="w-20 object-contain" />
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">
                  Update Your Profile
                </h1>
                <p className="mt-2 opacity-90">
                  Keep your information up to date
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="w-full py-2 px-3 bg-gray-700 text-white border border-gray-600 rounded-md"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            className="bg-gray-700 text-white border-gray-600"
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
                            <span className="w-5 h-5 mr-2 text-blue-600">
                              fb
                            </span>
                            Facebook
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://facebook.com/username"
                              {...field}
                              className="bg-gray-700 text-white border-gray-600"
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
                            <span className="w-5 h-5 mr-2 text-pink-600">
                              ig
                            </span>
                            Instagram
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://instagram.com/username"
                              {...field}
                              className="bg-gray-700 text-white border-gray-600"
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
                            <span className="w-5 h-5 mr-2 text-blue-400">
                              tw
                            </span>
                            Twitter
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://twitter.com/username"
                              {...field}
                              className="bg-gray-700 text-white border-gray-600"
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
                            <span className="w-5 h-5 mr-2 text-blue-700">
                              in
                            </span>
                            LinkedIn
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://linkedin.com/in/username"
                              {...field}
                              className="bg-gray-700 text-white border-gray-600"
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

                <Button
                  type="submit"
                  className="w-full cursor-pointer text-black bg-yellow-400 hover:bg-yellow-500"
                  size="lg"
                  disabled={uploadStatus.loading}
                >
                  {uploadStatus.loading ? "Updating..." : "Update Profile"}
                </Button>
                {uploadStatus.error && (
                  <p className="text-red-500 text-sm">{uploadStatus.error}</p>
                )}
              </div>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="p-6 border-t border-gray-700">
          <p className="text-center text-sm w-full">
            <Link
              to="/profile"
              className="font-medium text-yellow-400 hover:underline"
            >
              Back to Profile
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UpdateProfile;
