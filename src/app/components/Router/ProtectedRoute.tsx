import { userCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
