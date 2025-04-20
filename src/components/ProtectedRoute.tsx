
import { Navigate, Outlet } from "react-router-dom";
import { User } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  user: User | null;
}

export const ProtectedRoute = ({ user }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
