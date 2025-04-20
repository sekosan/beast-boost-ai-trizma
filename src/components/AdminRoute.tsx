
import { Navigate, Outlet } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface AdminRouteProps {
  user: User | null;
}

export const AdminRoute = ({ user }: AdminRouteProps) => {
  const { data: role, isLoading } = useQuery({
    queryKey: ['userRole', user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();
      
      if (error) throw error;
      return data?.role;
    },
    enabled: !!user,
  });

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

