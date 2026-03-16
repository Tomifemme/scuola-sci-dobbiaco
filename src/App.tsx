import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ChatWidget from "@/components/ChatWidget";
import Index from "./pages/Index";
import LessonsPage from "./pages/LessonsPage";
import KidsPage from "./pages/KidsPage";
import FreeridePage from "./pages/FreeridePage";
import SnowboardPage from "./pages/SnowboardPage";
import PricesPage from "./pages/PricesPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
