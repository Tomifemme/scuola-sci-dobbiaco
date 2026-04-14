import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import WeatherSection from "@/components/WeatherSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Scuola Sci Dobbiaco | Corsi di Sci nelle Dolomiti",
          de: "Skischule Toblach | Skikurse in den Dolomiten",
          en: "Ski School Dobbiaco | Ski Lessons in the Dolomites",
        }}
        description={{
          it: "Scuola Sci Dobbiaco: corsi di sci per adulti e bambini, snowboard, freeride nelle Dolomiti. Maestri qualificati dal 1975.",
          de: "Skischule Toblach: Skikurse für Erwachsene und Kinder, Snowboard, Freeride in den Dolomiten. Qualifizierte Skilehrer seit 1975.",
          en: "Ski School Dobbiaco: ski lessons for adults and kids, snowboard, freeride in the Dolomites. Qualified instructors since 1975.",
        }}
        path="/"
      />
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <WeatherSection />
      <QuickLinksSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
