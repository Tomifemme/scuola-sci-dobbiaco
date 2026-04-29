import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";

import Index from "./pages/Index";
import LessonsPage from "./pages/LessonsPage";
import KidsPage from "./pages/KidsPage";
import FreeridePage from "./pages/FreeridePage";
import SnowboardPage from "./pages/SnowboardPage";
// PricesPage removed - prices integrated into lesson pages
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/kids" element={<KidsPage />} />
              <Route path="/freeride" element={<FreeridePage />} />
              <Route path="/snowboard" element={<SnowboardPage />} />
              {/* prices integrated into lesson pages */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              {/* Redirects for old site URLs */}
              <Route path="/it/*" element={<Navigate to="/" replace />} />
              <Route path="/de/*" element={<Navigate to="/" replace />} />
              <Route path="/en/*" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
