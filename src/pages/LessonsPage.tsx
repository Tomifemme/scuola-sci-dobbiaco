import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PriceTable, { PriceRow } from "@/components/PriceTable";
import SeasonLegend from "@/components/SeasonLegend";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { User, Clock, Users, Zap, Star, Calendar, Tag, Percent } from "lucide-react";
import { motion } from "framer-motion";
import headerImg from "@/assets/20211218_103945.jpg";
import privateImg from "@/assets/collettive1.jpeg";
import groupImg from "@/assets/lezione.jpeg";
import superImg from "@/assets/20211218_103945.jpg";
import weekendImg from "@/assets/lezione.jpeg";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const LessonsPage = () => {
  useScrollToHash();
  const { lang } = useLanguage();
  const p = translations.pages.lessons;
  const d = (it: string, de: string, en: string) => ({ it, de, en }[lang]!);

  const sections = [
    {
      id: "private",
      icon: User,
      priceIcon: Clock,
      ...p.private,
      color: "bg-primary",
      image: privateImg,
      priceTitle: { it: "Lezioni Private - 1 ora = 55 min.", de: "Privatunterricht - 1 Stunde = 55 Min.", en: "Private Lessons - 1 hour = 55 min." } as Record<Language, string>,
      rows: [
        { label: d("1 persona", "1 Person", "1 person"), high: "€ 60/h", low: "€ 55/h" },
        { label: d("2 persone", "2 Personen", "2 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("3 persone", "3 Personen", "3 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("Ore 10:00–13:00 (20.12–09.01)", "10:00–13:00 Uhr (20.12–09.01)", "10:00 AM–1:00 PM (20.12–09.01)"), high: "€ 70/h", low: "—" },
      ] as PriceRow[],
      note: d("1 ora privata = 55 minuti", "1 Privatstunde = 55 Minuten", "1 private hour = 55 minutes"),
    },
    {
      id: "group",
      icon: Users,
      priceIcon: Users,
      ...p.group,
      color: "bg-alpine-sky",
      image: groupImg,
      priceTitle: { it: "Corso Collettivo 2 ore", de: "Gruppenkurs 2 Stunden", en: "Group Course 2 hours" } as Record<Language, string>,
      rows: [
        { label: d("1 giorno", "1 Tag", "1 day"), high: "€ 62", low: "€ 57" },
        { label: d("2 giorni", "2 Tage", "2 days"), high: "€ 113", low: "€ 102" },
        { label: d("3 giorni", "3 Tage", "3 days"), high: "€ 150", low: "€ 140" },
        { label: d("4 giorni", "4 Tage", "4 days"), high: "€ 180", low: "€ 165" },
        { label: d("5 giorni", "5 Tage", "5 days"), high: "€ 185", low: "€ 175" },
        { label: d("5 giorni + Adventure Day", "5 Tage + Adventure Day", "5 days + Adventure Day"), high: "€ 220", low: "€ 235" },
        { label: d("Giorno aggiuntivo", "Zusatztag", "Additional day"), high: "+ € 15", low: "+ € 15" },
      ] as PriceRow[],
    },
    {
      id: "super",
      icon: Zap,
      priceIcon: Star,
      ...p.super,
      color: "bg-primary",
      image: superImg,
      priceTitle: { it: "Supercorsi", de: "Superkurse", en: "Super Courses" } as Record<Language, string>,
      rows: [
        { label: d("3 pers. – 5 ore", "3 Pers. – 5 Std.", "3 pers. – 5 hrs"), high: "€ 135", low: "€ 125" },
        { label: d("3 pers. – 10 ore", "3 Pers. – 10 Std.", "3 pers. – 10 hrs"), high: "€ 240", low: "€ 220" },
        { label: d("4 pers. – 5 ore", "4 Pers. – 5 Std.", "4 pers. – 5 hrs"), high: "€ 125", low: "€ 110" },
        { label: d("4 pers. – 10 ore", "4 Pers. – 10 Std.", "4 pers. – 10 hrs"), high: "€ 210", low: "€ 195" },
        { label: d("5 pers. – 5 ore", "5 Pers. – 5 Std.", "5 pers. – 5 hrs"), high: "€ 115", low: "€ 105" },
        { label: d("5 pers. – 10 ore", "5 Pers. – 10 Std.", "5 pers. – 10 hrs"), high: "€ 195", low: "€ 180" },
      ] as PriceRow[],
    },
    {
      id: "weekend",
      icon: Calendar,
      priceIcon: Calendar,
      ...p.weekend,
      color: "bg-alpine-forest",
      image: weekendImg,
      priceTitle: { it: "Corso Weekend", de: "Wochenendkurs", en: "Weekend Course" } as Record<Language, string>,
      rows: [
        { label: d("3 giorni (Ven-Dom)", "3 Tage (Fr-So)", "3 days (Fri-Sun)"), high: "—", low: "€ 155" },
      ] as PriceRow[],
      note: d("Venerdì 14-16, Sabato e Domenica 10-12. Periodo: 09.01 – 12.04", "Freitag 14-16, Sa & So 10-12. Zeitraum: 09.01 – 12.04", "Friday 14-16, Sat & Sun 10-12. Period: 09.01 – 12.04"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Lezioni di Sci Adulti | Scuola Sci Dobbiaco",
          de: "Skikurse Erwachsene | Skischule Toblach",
          en: "Adult Ski Lessons | Ski School Dobbiaco",
        }}
        description={{
          it: "Lezioni private e corsi collettivi di sci per adulti a Dobbiaco. Prezzi, orari e offerte speciali della Scuola Sci Dobbiaco nelle Dolomiti.",
          de: "Privatunterricht und Gruppenkurse für Erwachsene in Toblach. Preise, Zeiten und Angebote der Skischule Toblach in den Dolomiten.",
          en: "Private and group ski lessons for adults in Dobbiaco. Prices, schedules and special offers from Ski School Dobbiaco in the Dolomites.",
        }}
        path="/lessons"
      />
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={lezioneImg} marginTop="mt-[50px]" />

      <section className="alpine-section">
        <div className="alpine-container">
          <SeasonLegend />

          {/* Special Offers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Tag className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(translations.pages.prices.earlyBird.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(translations.pages.prices.earlyBird.desc, lang)}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">{t(translations.pages.prices.earlyBird.note, lang)}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Percent className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(translations.pages.prices.familyDiscount.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(translations.pages.prices.familyDiscount.desc, lang)}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Star className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(translations.pages.prices.adventureDay.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(translations.pages.prices.adventureDay.desc, lang)}</p>
            </motion.div>
          </div>

          {/* Lesson sections with prices */}
          <div className="grid gap-16">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${s.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{t(s.title, lang)}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <img src={s.image} alt={t(s.title, lang)} className="rounded-2xl w-full h-64 md:h-80 lg:h-96 object-cover object-bottom" />
                    <p className="text-muted-foreground font-body leading-relaxed">{t(s.desc, lang)}</p>
                  </div>
                  <PriceTable
                    icon={s.priceIcon}
                    title={t(s.priceTitle, lang)}
                    rows={s.rows}
                    note={'note' in s ? (s as any).note : undefined}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rental CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.ski-rent.it/it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
              style={{ background: "var(--gradient-alpine)" }}
            >
              {d("Noleggia la tua attrezzatura", "Ausrüstung mieten", "Rent your equipment")}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LessonsPage;
