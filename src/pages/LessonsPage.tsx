import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Users, User, Zap, Calendar, ArrowRight } from "lucide-react";
import lezioneImg from "@/assets/lezione.jpg";

const LessonsPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.lessons;

  const sections = [
    { id: "private", icon: User, ...p.private, color: "bg-primary" },
    { id: "group", icon: Users, ...p.group, color: "bg-alpine-sky" },
    { id: "super", icon: Zap, ...p.super, color: "bg-primary" },
    { id: "weekend", icon: Calendar, ...p.weekend, color: "bg-alpine-forest" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={lezioneImg} />
      <section className="alpine-section">
        <div className="alpine-container">
          <div className="grid gap-12">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border flex gap-6 items-start"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className={`${s.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{t(s.title, lang)}</h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">{t(s.desc, lang)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/prices"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--gradient-alpine)" }}
            >
              {{ it: "Vedi i Prezzi", de: "Preise anzeigen", en: "View Prices" }[lang]}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LessonsPage;
