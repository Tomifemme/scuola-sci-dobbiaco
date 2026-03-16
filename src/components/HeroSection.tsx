import heroImage from "@/assets/hero-dolomites.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Panorama delle Dolomiti innevate a Dobbiaco"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up text-alpine-ice/80"
          style={{ animationDelay: "0.2s" }}
        >
          Alta Val Pusteria · Dolomiti
        </p>
        <h1
          className="alpine-heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up text-primary-foreground"
          style={{ animationDelay: "0.4s" }}
        >
          Scuola Sci
          <br />
          <span className="text-alpine-gold">Dobbiaco</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up text-alpine-ice/90 font-body"
          style={{ animationDelay: "0.6s" }}
        >
          La prima e miglior scuola sci a Dobbiaco. Sci, Snowboard, Freeride e Fun for Kids nelle splendide Dolomiti.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#prenota"
            className="px-8 py-4 rounded-lg text-lg font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            Prenota Ora
          </a>
          <a
            href="#servizi"
            className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            I Nostri Corsi
          </a>
        </div>
      </div>

      <a
        href="#benvenuto"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
