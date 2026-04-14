import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";
import SeasonLegend from "@/components/SeasonLegend";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { Mountain, MapPin, Shield, Compass } from "lucide-react";
import imgHeader from "@/assets/freeride-header.jpg";
import imgBeginners from "@/assets/DJI_20260320120749_0039_1D.JPG";
import imgExperts from "@/assets/IMG_6020.JPG";

const FreeridePage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.freeride;
  const d = (it: string, de: string, en: string) => ({ it, de, en }[lang]!);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Freeride Dolomiti | Scuola Sci Dobbiaco",
          de: "Freeride Dolomiten | Skischule Toblach",
          en: "Freeride Dolomites | Ski School Dobbiaco",
        }}
        description={{
          it: "Freeride nelle Dolomiti con la Scuola Sci Dobbiaco. Escursioni guidate fuoripista per principianti ed esperti con maestri qualificati.",
          de: "Freeride in den Dolomiten mit der Skischule Toblach. Geführte Off-Piste-Touren für Anfänger und Experten mit qualifizierten Skilehrern.",
          en: "Freeride in the Dolomites with Ski School Dobbiaco. Guided off-piste tours for beginners and experts with qualified instructors.",
        }}
        path="/freeride"
      />
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={imgHeader} />

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
              {d("Destinazioni", "Destinationen", "Destinations")}
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

          {/* Beginner & Expert with images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              id="beginners"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img src={imgBeginners} alt={t(p.beginners.title, lang)} className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="bg-alpine-sky w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(p.beginners.title, lang)}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{t(p.beginners.desc, lang)}</p>
              </div>
            </motion.div>
            <motion.div
              id="experts"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img src={imgExperts} alt={t(p.experts.title, lang)} className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="bg-alpine-gold w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(p.experts.title, lang)}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{t(p.experts.desc, lang)}</p>
              </div>
            </motion.div>
          </div>

          {/* Prices */}
          <SeasonLegend />
          <div className="max-w-lg mx-auto">
            <PriceTable
              icon={Mountain}
              title={d("Freeride - giornata con Maestro", "Freeride - Ganztag mit Skilehrer", "Freeride - full day with instructor")}
              rows={[
                { label: d("2 pers. – Basic", "2 Pers. – Basic", "2 pers. – Basic"), high: "€ 170", low: "€ 160" },
                { label: d("2 pers. – Classic", "2 Pers. – Classic", "2 pers. – Classic"), high: "€ 320", low: "€ 295" },
                { label: d("3 pers. – Basic", "3 Pers. – Basic", "3 pers. – Basic"), high: "€ 130", low: "€ 125" },
                { label: d("3 pers. – Classic", "3 Pers. – Classic", "3 pers. – Classic"), high: "€ 245", low: "€ 220" },
                { label: d("4 pers. – Basic", "4 Pers. – Basic", "4 pers. – Basic"), high: "€ 115", low: "€ 105" },
                { label: d("4 pers. – Classic", "4 Pers. – Classic", "4 pers. – Classic"), high: "€ 210", low: "€ 195" },
              ]}
            />
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
              {d("Noleggiare Sci da Freeride", "Freeride-Ski mieten", "Rent Freeride Skis")}
            </a>
          </div>

          {/* YouTube Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/4pES_oYjXd4?si=D1Dbhav6-16GIIPM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FreeridePage;
