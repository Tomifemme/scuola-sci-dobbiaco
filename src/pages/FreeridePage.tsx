import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { Mountain, MapPin, Shield, Compass } from "lucide-react";
import freerideImg from "@/assets/freeride.jpg";

const FreeridePage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.freeride;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={freerideImg} />

      <section className="alpine-section">
        <div className="alpine-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-muted-foreground font-body leading-relaxed">{t(p.intro, lang)}</p>
          </motion.div>

          {/* Destinations */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Compass className="w-7 h-7 text-primary" />
              {{ it: "Destinazioni", de: "Destinationen", en: "Destinations" }[lang]}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tArray(p.destinations, lang).map((dest, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border flex items-start gap-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-body">{dest}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beginner & Expert */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              id="beginners"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="bg-alpine-sky w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(p.beginners.title, lang)}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t(p.beginners.desc, lang)}</p>
            </motion.div>
            <motion.div
              id="experts"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="bg-alpine-gold w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(p.experts.title, lang)}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t(p.experts.desc, lang)}</p>
            </motion.div>
          </div>

          {/* Rental Link */}
          <div className="text-center mt-12">
            <a
              href="http://www.ski-rent.it/it/FREERIDE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
              style={{ background: "var(--gradient-alpine)" }}
            >
              {{ it: "Noleggiare Sci da Freeride", de: "Freeride-Ski mieten", en: "Rent Freeride Skis" }[lang]}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FreeridePage;
