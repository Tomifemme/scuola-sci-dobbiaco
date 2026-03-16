import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Tag, Users, Clock, Percent, Star, Calendar, Mountain, Baby, Sun, Snowflake } from "lucide-react";
import instructorsImg from "@/assets/instructors.jpg";
import { Language } from "@/i18n/translations";

const PricesPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.prices;

  const highLabel = { it: "Alta Stagione", de: "Hochsaison", en: "High Season" }[lang]!;
  const lowLabel = { it: "Bassa Stagione", de: "Nebensaison", en: "Low Season" }[lang]!;
  const highDates = "21.12 – 09.01 | 08.02 – 08.03";
  const lowDates = "29.11 – 20.12 | 10.01 – 07.02 | 09.03 – 12.04";

  type PriceRow = { label: string; high: string; low: string };
  type PriceCategory = {
    icon: React.ElementType;
    title: Record<Language, string>;
    rows: PriceRow[];
    note?: string;
  };

  const d = (it: string, de: string, en: string) => ({ it, de, en }[lang]!);

  const categories: PriceCategory[] = [
    {
      icon: Users,
      title: p.categories.groupCourse,
      rows: [
        { label: d("1 giorno", "1 Tag", "1 day"), high: "€ 62", low: "€ 57" },
        { label: d("2 giorni", "2 Tage", "2 days"), high: "€ 113", low: "€ 102" },
        { label: d("3 giorni", "3 Tage", "3 days"), high: "€ 150", low: "€ 140" },
        { label: d("4 giorni", "4 Tage", "4 days"), high: "€ 180", low: "€ 165" },
        { label: d("5 giorni", "5 Tage", "5 days"), high: "€ 185", low: "€ 175" },
        { label: d("5 giorni + Adventure Day", "5 Tage + Adventure Day", "5 days + Adventure Day"), high: "€ 220", low: "€ 235" },
        { label: d("Giorno aggiuntivo", "Zusatztag", "Additional day"), high: "+ € 15", low: "+ € 15" },
      ],
    },
    {
      icon: Clock,
      title: p.categories.privateLessons,
      rows: [
        { label: d("1 persona", "1 Person", "1 person"), high: "€ 60/h", low: "€ 55/h" },
        { label: d("2 persone", "2 Personen", "2 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("3 persone", "3 Personen", "3 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("Dalle ore 13:00", "Ab 13:00 Uhr", "From 1:00 PM"), high: "€ 70/h", low: "€ 70/h" },
      ],
      note: d("1 ora privata = 55 minuti", "1 Privatstunde = 55 Minuten", "1 private hour = 55 minutes"),
    },
    {
      icon: Star,
      title: p.categories.superCourses,
      rows: [
        { label: d("3 pers. – 5 ore", "3 Pers. – 5 Std.", "3 pers. – 5 hrs"), high: "€ 135", low: "€ 125" },
        { label: d("3 pers. – 10 ore", "3 Pers. – 10 Std.", "3 pers. – 10 hrs"), high: "€ 240", low: "€ 220" },
        { label: d("4 pers. – 5 ore", "4 Pers. – 5 Std.", "4 pers. – 5 hrs"), high: "€ 125", low: "€ 110" },
        { label: d("4 pers. – 10 ore", "4 Pers. – 10 Std.", "4 pers. – 10 hrs"), high: "€ 210", low: "€ 195" },
        { label: d("5 pers. – 5 ore", "5 Pers. – 5 Std.", "5 pers. – 5 hrs"), high: "€ 115", low: "€ 105" },
        { label: d("5 pers. – 10 ore", "5 Pers. – 10 Std.", "5 pers. – 10 hrs"), high: "€ 195", low: "€ 180" },
      ],
    },
    {
      icon: Baby,
      title: p.categories.fullDay,
      rows: [
        { label: d("1 giorno", "1 Tag", "1 day"), high: "€ 125", low: "€ 115" },
        { label: d("2 giorni", "2 Tage", "2 days"), high: "€ 225", low: "€ 220" },
        { label: d("3 giorni", "3 Tage", "3 days"), high: "€ 310", low: "€ 299" },
        { label: d("4 giorni", "4 Tage", "4 days"), high: "€ 380", low: "€ 365" },
        { label: d("5 giorni", "5 Tage", "5 days"), high: "€ 445", low: "€ 420" },
      ],
      note: d("Orario: 10:00 – 15:30, pranzo incluso", "Zeit: 10:00 – 15:30, Mittagessen inklusive", "Time: 10:00 – 15:30, lunch included"),
    },
    {
      icon: Calendar,
      title: p.categories.weekendCourse,
      rows: [
        { label: d("3 giorni (Ven-Dom)", "3 Tage (Fr-So)", "3 days (Fri-Sun)"), high: "—", low: "€ 155" },
      ],
      note: d("Venerdì 14-16, Sabato e Domenica 10-12. Periodo: 09.01 – 12.04", "Freitag 14-16, Sa & So 10-12. Zeitraum: 09.01 – 12.04", "Friday 14-16, Sat & Sun 10-12. Period: 09.01 – 12.04"),
    },
    {
      icon: Mountain,
      title: p.categories.freeride,
      rows: [
        { label: d("2 pers. – Basic", "2 Pers. – Basic", "2 pers. – Basic"), high: "€ 170", low: "€ 160" },
        { label: d("2 pers. – Classic", "2 Pers. – Classic", "2 pers. – Classic"), high: "€ 320", low: "€ 295" },
        { label: d("3 pers. – Basic", "3 Pers. – Basic", "3 pers. – Basic"), high: "€ 130", low: "€ 125" },
        { label: d("3 pers. – Classic", "3 Pers. – Classic", "3 pers. – Classic"), high: "€ 245", low: "€ 220" },
        { label: d("4 pers. – Basic", "4 Pers. – Basic", "4 pers. – Basic"), high: "€ 115", low: "€ 105" },
        { label: d("4 pers. – Classic", "4 Pers. – Classic", "4 pers. – Classic"), high: "€ 210", low: "€ 195" },
      ],
    },
    {
      icon: Baby,
      title: p.categories.juniorClub,
      rows: [
        { label: d("1 bambino", "1 Kind", "1 child"), high: "€ 55", low: "€ 55" },
      ],
      note: d("Orario: 12:00 – 15:00, pranzo incluso", "Zeit: 12:00 – 15:00, Mittagessen inklusive", "Time: 12:00 – 15:00, lunch included"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={instructorsImg} />

      <section className="alpine-section">
        <div className="alpine-container">
          {/* Season Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
          >
            <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-xl px-5 py-3">
              <Sun className="w-5 h-5 text-destructive" />
              <div>
                <p className="font-display font-bold text-foreground text-sm">{highLabel}</p>
                <p className="text-xs text-muted-foreground">{highDates}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl px-5 py-3">
              <Snowflake className="w-5 h-5 text-primary" />
              <div>
                <p className="font-display font-bold text-foreground text-sm">{lowLabel}</p>
                <p className="text-xs text-muted-foreground">{lowDates}</p>
              </div>
            </div>
          </motion.div>

          {/* Special Offers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Star className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.adventureDay.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.adventureDay.desc, lang)}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Tag className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.earlyBird.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.earlyBird.desc, lang)}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">{t(p.earlyBird.note, lang)}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Percent className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.familyDiscount.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.familyDiscount.desc, lang)}</p>
            </motion.div>
          </div>

          {/* Price Tables */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="p-5 border-b border-border" style={{ background: "var(--gradient-alpine)" }}>
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-6 h-6 text-primary-foreground" />
                    <h3 className="font-display text-base font-bold text-primary-foreground">{t(cat.title, lang)}</h3>
                  </div>
                </div>
                {/* Column Headers */}
                <div className="grid grid-cols-3 px-6 py-2 bg-secondary/50 border-b border-border text-xs font-semibold text-muted-foreground">
                  <span></span>
                  <span className="text-center flex items-center justify-center gap-1">
                    <Sun className="w-3 h-3 text-destructive" /> {highLabel}
                  </span>
                  <span className="text-center flex items-center justify-center gap-1">
                    <Snowflake className="w-3 h-3 text-primary" /> {lowLabel}
                  </span>
                </div>
                <div className="divide-y divide-border">
                  {cat.rows.map((row, j) => (
                    <div key={j} className="grid grid-cols-3 items-center px-6 py-3">
                      <span className="text-foreground font-body text-sm">{row.label}</span>
                      <span className="font-display font-bold text-destructive text-center text-sm">{row.high}</span>
                      <span className="font-display font-bold text-primary text-center text-sm">{row.low}</span>
                    </div>
                  ))}
                </div>
                {cat.note && (
                  <div className="px-6 py-2 bg-secondary/30 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">{cat.note}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricesPage;
