/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { loginSchema } from "./schema/login";
import {
  useForgetPasswordMutation,
  useLoginMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { verifyToken } from "@/utility/varifyToken";
import { toast } from "sonner";
// import { toast } from "sonner";

const Login = () => {
  const [passwordHideAndShow, setPasswordHideAndShow] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "sujon258549@gmail.com",
      password: "123456",
    },
  });
  const [userLogin] = useLoginMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...", { duration: 2000 });
    setIsLoading(true);

    try {
      const res = await userLogin(data).unwrap();

      if (!res.data?.accessToken) {
        throw new Error(
          res.data?.message || "Login failed. No access token received."
        );
      }

      const userInfo = verifyToken(res.data.accessToken);

      if (!userInfo) {
        throw new Error("Invalid token. Please try again.");
      }

      dispatch(
        setUser({
          user: { userInfo },
          token: res.data.accessToken,
        })
      );
      sessionStorage.setItem("accessToken", res.data.accessToken);
      toast.success("Login successful!", { id: toastId });
      navigate("/", { replace: true }); // Prevents going back to login
    } catch (error: any) {
      console.error("Login failed:", error);
      const errorMessage =
        error?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  const [forgetPassword] = useForgetPasswordMutation();
  const handelForGetPassword = async () => {
    const email = form.watch("email");

    if (!email) {
      toast.error("Peace input email");
    }
    console.log(email);
    const res = await forgetPassword({ email: email }).unwrap();
    if (res.success) {
      toast.success(res.message || "Peace check Email successful!", {
        duration: 2000,
      });
    } else {
      toast.error(res.message || "Peace check Email successful!", {
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen py-10 flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-[550px] w-full mx-4 bg-gray-800  text-white p-8 rounded-xl shadow-2xl  border-gray-700">
        {/* Header with logo placeholder */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-[75px] bg-yellow rounded-full flex items-center justify-center mb-4">
            <img
              className="rounded-full p-1"
              src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?ga=GA1.1.113021991.1746121135&semt=ais_hybrid&w=740"
              alt=""
            />
          </div>
          <h2 className="text-3xl font-bold text-yellow-400">Welcome Back</h2>
          <p className="text-gray-300 mt-2">
            Sign in to access your account and continue your journey with us
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      type="email"
                      className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-yellow-500"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-gray-300">Password</FormLabel>
                    <Button
                      type="button"
                      onClick={handelForGetPassword}
                      className="text-sm cursor-pointer text-yellow-400 hover:underline"
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type={passwordHideAndShow ? "text" : "password"}
                      className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-yellow-500"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Remember me & Show Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  className="border-gray-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm font-medium text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="flex items-center gap-2.5">
                <Checkbox
                  id="show-password"
                  checked={passwordHideAndShow}
                  onCheckedChange={() =>
                    setPasswordHideAndShow(!passwordHideAndShow)
                  }
                  className="border-gray-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                />
                <label
                  htmlFor="show-password"
                  className="text-sm font-medium text-gray-300"
                >
                  Show Password
                </label>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-yellow cursor-pointer  hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition duration-200 shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
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
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>

        {/* Footer with register link */}
        <div className="text-center text-sm mt-8 pt-4 border-t border-gray-700">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-yellow-400 hover:underline font-medium"
            >
              Create one now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
