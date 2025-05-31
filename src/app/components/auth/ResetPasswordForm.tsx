/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

// Form Schema Validation
const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  console.log("Password reset submitted:", email, token);
  const [resetPassword] = useResetPasswordMutation();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      token: token,
      newPassword: values?.newPassword,
      email: email,
    };
    const res = await resetPassword(data);
    if ("data" in res && res.data?.success) {
      toast.success(res.data.message || "Successfully reset password!", {
        duration: 2000,
      });
      navigate("/login");
    } else {
      const errorMessage =
        ("data" in res && res.data?.message) ||
        ("error" in res && (res.error as any)?.message);
      toast.error(errorMessage, {
        duration: 2000,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md"
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className="rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary pr-10"
                  />
                </FormControl>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormMessage />
              <div className="text-xs text-gray-500 mt-1">
                <p>Password must contain:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                  <li>One special character</li>
                </ul>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className="rounded-lg border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary pr-10"
                  />
                </FormControl>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-pointer btn-bg ">
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
