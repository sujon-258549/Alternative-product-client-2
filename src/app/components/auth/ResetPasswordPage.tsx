import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ResetPasswordForm } from "./ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 0">
      <Card className="w-full max-w-md bg-gray-800 my-10 text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your email and a new password to reset your account access.
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
