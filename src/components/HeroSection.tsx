import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import instructorsImg from "@/assets/instructors.jpg";

const HeroSection = () => {
  const { lang } = useLanguage();
  const h = translations.hero;
  const n = translations.nav;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={instructorsImg}
        alt="Scuola Sci Dobbiaco Team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-alpine-ice/80"
        >
          {t(h.location, lang)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="alpine-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-primary-foreground"
        >
          {t(h.title1, lang)}
          <br />
          <span className="text-alpine-gold">{t(h.title2, lang)}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-alpine-ice/90 font-body"
        >
          {t(h.subtitle, lang)}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-4 rounded-lg text-lg font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            {t(n.bookNow, lang)}
          </Link>
          <Link
            to="/lessons"
            className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            {t(h.ourCourses, lang)}
          </Link>
        </motion.div>
      </div>

      <a href="#benvenuto" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
