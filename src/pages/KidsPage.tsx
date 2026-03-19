import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Snowflake, User, Users, Star, Sun } from "lucide-react";
import kidsImg from "@/assets/kids-lesson.jpg";
import scuolaSciImg from "@/assets/scuola-sci1.jpg";

const KidsPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.kids;

  const sections = [
    { id: "private", icon: User, ...p.privateLessons, color: "bg-primary" },
    { id: "group", icon: Users, ...p.groupCourses, color: "bg-alpine-sky" },
    { id: "junior", icon: Star, ...p.juniorClub, color: "bg-alpine-gold" },
    { id: "fullday", icon: Sun, ...p.specialFullDay, color: "bg-alpine-forest" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={kidsImg} />

      {/* Yeti Park Section */}
      <section className="alpine-section bg-secondary/30">
        <div className="alpine-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Snowflake className="w-8 h-8 text-primary" />
                <h2 className="font-display text-3xl font-bold text-foreground">{t(p.yetiPark.title, lang)}</h2>
              </div>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">{t(p.yetiPark.desc, lang)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={scuolaSciImg} alt="Yeti Park" className="rounded-2xl shadow-lg w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="alpine-section">
        <div className="alpine-container">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className={`${s.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(s.title, lang)}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{t(s.desc, lang)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="alpine-section bg-secondary/30">
        <div className="alpine-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              {{ it: "Imparare a sciare a 3 anni!", de: "Skifahren lernen mit 3 Jahren!", en: "Learn to ski at 3 years old!" }[lang]}
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              {{ it: "Guarda i nostri piccoli campioni in azione", de: "Schaut unsere kleinen Champions in Aktion", en: "Watch our little champions in action" }[lang]}
            </p>
            <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6r9R1TDa0DI?si=BNzRoSWROEBoYCnb"
                title="Imparare a sciare a 3 anni - Scuola Sci Dobbiaco"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsPage;
