import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { Check, User, Users } from "lucide-react";
import snowboardImg from "@/assets/snowboard.jpg";

const SnowboardPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.snowboard;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={snowboardImg} />

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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              id="private"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {{ it: "Lezioni Private Snowboard", de: "Snowboard Privatunterricht", en: "Snowboard Private Lessons" }[lang]}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {{ it: "Lezioni individuali con maestro specializzato di snowboard per tutti i livelli.", de: "Einzelunterricht mit spezialisiertem Snowboardlehrer für alle Levels.", en: "Individual lessons with specialized snowboard instructor for all levels." }[lang]}
              </p>
            </motion.div>
            <motion.div
              id="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="bg-alpine-sky w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {{ it: "Corso Collettivo Snowboard", de: "Snowboard Gruppenkurs", en: "Snowboard Group Course" }[lang]}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {{ it: "Corsi collettivi di snowboard. Gruppi di minimo 3 persone.", de: "Snowboard-Gruppenkurse. Gruppen ab 3 Personen.", en: "Group snowboard courses. Groups of minimum 3 people." }[lang]}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/50 rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              {{ it: "Caratteristiche", de: "Merkmale", en: "Features" }[lang]}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {tArray(p.features, lang).map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-body">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SnowboardPage;
