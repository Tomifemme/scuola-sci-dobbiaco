import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, User, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceTable from "@/components/PriceTable";
import SeasonLegend from "@/components/SeasonLegend";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { privateLessonRows, groupLessonRows } from "@/lib/lesson-pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import photo from "@/assets/cross-country-dobbiaco.jpg.asset.json";

export default function CrossCountryPage() {
  const { lang } = useLanguage();
  const p = translations.pages.crossCountry;
  const reducedMotion = useReducedMotion();
  const sections = [
    { id: "private", icon: User, content: p.private, rows: privateLessonRows(lang), priceTitle: translations.pages.prices.categories.privateLessons, note: t(p.privateNote, lang) },
    { id: "group", icon: Users, content: p.group, rows: groupLessonRows(lang), priceTitle: translations.pages.prices.categories.groupCourse, note: undefined },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative mt-16 md:mt-20 h-[68svh] min-h-[400px] max-h-[700px] flex items-end overflow-hidden">
          <img src={photo.url} alt={t(p.title, lang)} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
          <div className="relative w-full bg-alpine-deep/80 py-6 md:py-8">
            <div className="alpine-container px-4">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{t(p.title, lang)}</h1>
              <p className="font-body text-base md:text-xl text-alpine-ice max-w-3xl">{t(p.subtitle, lang)}</p>
            </div>
          </div>
        </section>
        <section className="alpine-section">
          <div className="alpine-container">
            <p className="text-lg font-body text-muted-foreground max-w-3xl mb-10">{t(p.intro, lang)}</p>
            <SeasonLegend />
            <div className="space-y-16">
              {sections.map((section) => (
                <motion.section key={section.id} id={section.id} className="grid md:grid-cols-2 gap-8 scroll-mt-24" initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 0.4 }}>
                  <div>
                    <section.icon className="h-8 w-8 text-primary mb-4" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{t(section.content.title, lang)}</h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{t(section.content.desc, lang)}</p>
                    <Button asChild><Link to="/contact">{t(translations.nav.bookNow, lang)}<ArrowRight /></Link></Button>
                  </div>
                  <PriceTable icon={section.icon} title={t(section.priceTitle, lang)} rows={section.rows} note={section.note} />
                </motion.section>
              ))}
            </div>
            <p className="mt-12 font-body text-muted-foreground">{t(p.bookingNote, lang)}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}