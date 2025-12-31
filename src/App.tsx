import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition";
import { AnimatedBackgroundPattern } from "./components/AnimatedBackgroundPattern";
import { AIChatWidget } from "./components/AIChatWidget";
import { PortalLayout } from "./components/layout/PortalLayout";
import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";

// Landing
import LandingPage from "./features/landing/pages/LandingPage";

// Dashboard
import Dashboard from "./features/dashboard/pages/Dashboard";
import DataQuality from "./features/dashboard/pages/DataQuality";
import AIInsights from "./features/dashboard/pages/AIInsights";
import ROICalculator from "./features/dashboard/pages/ROICalculator";
import RevenueModel from "./features/dashboard/pages/RevenueModel";
import ChatApp from "./features/dashboard/pages/ChatApp";

// Marketplace
import MarketplacePage from "./features/marketplace/pages/MarketplacePage";

// Shared
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />

        {/* Dashboard Routes (Demo Mode - No Auth Required) */}
        <Route path="/dashboard" element={<PortalLayout />}>
          <Route index element={<PageTransition><Dashboard /></PageTransition>} />
          <Route path="data-quality" element={<PageTransition><DataQuality /></PageTransition>} />
          <Route path="ai-insights" element={<PageTransition><AIInsights /></PageTransition>} />
          <Route path="roi-calculator" element={<PageTransition><ROICalculator /></PageTransition>} />
          <Route path="revenue-model" element={<PageTransition><RevenueModel /></PageTransition>} />
          <Route path="chat" element={<PageTransition><ChatApp /></PageTransition>} />
        </Route>

        {/* Marketplace (Demo Mode - No Auth Required) */}
        <Route path="/marketplace" element={<PageTransition><MarketplacePage /></PageTransition>} />

        {/* Catch-all */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedBackgroundPattern />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <AIChatWidget />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
