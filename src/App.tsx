
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Strategies from "./pages/Strategies";
import StrategyDetail from "./pages/StrategyDetail";
import Education from "./pages/Education";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Mevcut oturumu kontrol et
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      console.log("Auth session check:", session?.user ? "User logged in" : "No user");
    });

    // Auth state değişikliklerini dinle
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state change:", event, session?.user?.email);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  console.log("Current user state:", user ? "Logged in" : "Not logged in");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/auth" 
              element={user ? <Navigate to="/" /> : <Auth />} 
            />
            <Route 
              path="/" 
              element={user ? <Index /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/stratejiler" 
              element={user ? <Strategies /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/stratejiler/:strategyId" 
              element={user ? <StrategyDetail /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/egitim" 
              element={user ? <Education /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/araclar" 
              element={user ? <Tools /> : <Navigate to="/auth" />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
