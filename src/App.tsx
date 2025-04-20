
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Strategies from "./pages/Strategies";
import StrategyDetail from "./pages/StrategyDetail";
import Education from "./pages/Education";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Mock user for development
export const MOCK_USER = {
  id: 'mock-user-id',
  email: 'mock@example.com',
  role: 'admin'
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stratejiler" element={<Strategies />} />
            <Route path="/stratejiler/:strategyId" element={<StrategyDetail />} />
            <Route path="/egitim" element={<Education />} />
            <Route path="/araclar" element={<Tools />} />
            <Route path="/admin" element={<div>Admin Panel</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
