import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PriceTable, { PriceRow } from "@/components/PriceTable";
import SeasonLegend from "@/components/SeasonLegend";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, Language } from "@/i18n/translations";
import { Snowflake, User, Users, Star, Sun, Baby, Clock } from "lucide-react";
import headerImg from "@/assets/20190114_111830 (2).jpg";
import campImg from "@/assets/20200106_111652.jpg";
import privateImg from "@/assets/Bild Nr. 2.jpg";
import img5517 from "@/assets/IMG_5517.JPG";
import fullDayImg from "@/assets/20211218_113244 copy.jpg";
import imgERJZ from "@/assets/ERJZ9913.JPG";

const KidsPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.kids;
  const d = (it: string, de: string, en: string) => ({ it, de, en }[lang]!);

  const sections = [
    {
      id: "private",
      icon: User,
      priceIcon: Clock,
      ...p.privateLessons,
      color: "bg-primary",
      image: img5854,
      priceTitle: { it: "Lezioni Private - 1 ora = 55 min.", de: "Privatunterricht - 1 Stunde = 55 Min.", en: "Private Lessons - 1 hour = 55 min." } as Record<Language, string>,
      rows: [
        { label: d("1 persona", "1 Person", "1 person"), high: "€ 60/h", low: "€ 55/h" },
        { label: d("2 persone", "2 Personen", "2 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("3 persone", "3 Personen", "3 people"), high: "+ € 15/h", low: "+ € 15/h" },
        { label: d("Dalle ore 13:00", "Ab 13:00 Uhr", "From 1:00 PM"), high: "€ 70/h", low: "€ 70/h" },
      ] as PriceRow[],
      note: d("1 ora privata = 55 minuti", "1 Privatstunde = 55 Minuten", "1 private hour = 55 minutes"),
    },
    {
      id: "group",
      icon: Users,
      priceIcon: Users,
      ...p.groupCourses,
      color: "bg-alpine-sky",
      image: img5517,
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
      id: "junior",
      icon: Star,
      priceIcon: Baby,
      ...p.juniorClub,
      color: "bg-alpine-gold",
      image: imgERJZ,
      priceTitle: { it: "Babyclub - Junior Club - pranzo incluso", de: "Babyclub - Junior Club - Mittagessen inklusive", en: "Babyclub - Junior Club - lunch included" } as Record<Language, string>,
      rows: [
        { label: d("1 bambino", "1 Kind", "1 child"), high: "€ 55", low: "€ 55" },
      ] as PriceRow[],
      note: d("Orario: 12:00 – 15:00, pranzo incluso", "Zeit: 12:00 – 15:00, Mittagessen inklusive", "Time: 12:00 – 15:00, lunch included"),
    },
    {
      id: "fullday",
      icon: Sun,
      priceIcon: Baby,
      ...p.specialFullDay,
      color: "bg-alpine-forest",
      image: img6020,
      priceTitle: { it: "Special Full Day - pranzo incluso", de: "Special Full Day - Mittagessen inklusive", en: "Special Full Day - lunch included" } as Record<Language, string>,
      rows: [
        { label: d("1 giorno", "1 Tag", "1 day"), high: "€ 125", low: "€ 115" },
        { label: d("2 giorni", "2 Tage", "2 days"), high: "€ 225", low: "€ 220" },
        { label: d("3 giorni", "3 Tage", "3 days"), high: "€ 310", low: "€ 299" },
        { label: d("4 giorni", "4 Tage", "4 days"), high: "€ 380", low: "€ 365" },
        { label: d("5 giorni", "5 Tage", "5 days"), high: "€ 445", low: "€ 420" },
      ] as PriceRow[],
      note: d("Orario: 10:00 – 15:30, pranzo incluso", "Zeit: 10:00 – 15:30, Mittagessen inklusive", "Time: 10:00 – 15:30, lunch included"),
    },
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

      {/* Kids lessons with prices */}
      <section className="alpine-section">
        <div className="alpine-container">
          <SeasonLegend />

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
                    <img src={s.image} alt={t(s.title, lang)} className="rounded-2xl w-full h-48 object-cover" />
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
        </div>
      </section>

      {/* YouTube Video */}
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
