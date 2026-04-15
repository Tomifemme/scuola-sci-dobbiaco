import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PriceTable, { PriceRow } from "@/components/PriceTable";
import SeasonLegend from "@/components/SeasonLegend";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray, Language } from "@/i18n/translations";
import { Check, User, Users, Clock } from "lucide-react";
import imgHeader from "@/assets/18041813380098.jpg";
import imgPrivate from "@/assets/18041813380098.jpg";
import imgGroup from "@/assets/snowboard-group.jpg";

const SnowboardPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.snowboard;
  const d = (it: string, de: string, en: string) => ({ it, de, en }[lang]!);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={{
          it: "Corsi Snowboard | Scuola Sci Dobbiaco",
          de: "Snowboardkurse | Skischule Toblach",
          en: "Snowboard Lessons | Ski School Dobbiaco",
        }}
        description={{
          it: "Corsi di snowboard a Dobbiaco: lezioni private e collettive per tutti i livelli nelle Dolomiti. Maestri specializzati.",
          de: "Snowboardkurse in Toblach: Privat- und Gruppenunterricht für alle Levels in den Dolomiten. Spezialisierte Lehrer.",
          en: "Snowboard lessons in Dobbiaco: private and group courses for all levels in the Dolomites. Specialized instructors.",
        }}
        path="/snowboard"
      />
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={imgHeader} marginTop="mt-[30px]" />

      <section className="alpine-section">
        <div className="alpine-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-xl text-muted-foreground font-body leading-relaxed">{t(p.intro, lang)}</p>
          </motion.div>

          <SeasonLegend />

          <div className="grid gap-16 mb-12">
            {/* Private Snowboard */}
            <motion.div
              id="private"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {d("Lezioni Private Snowboard", "Snowboard Privatunterricht", "Snowboard Private Lessons")}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img src={imgPrivate} alt={d("Lezione privata snowboard Dobbiaco", "Privater Snowboardunterricht Toblach", "Private snowboard lesson Dobbiaco")} className="rounded-2xl w-full h-64 md:h-80 lg:h-96 object-cover object-bottom" />
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {d(
                      "Lezioni individuali con maestro specializzato di snowboard per tutti i livelli. Durata: 55 minuti. Disponibili tutti i giorni dalle 9:00 alle 16:00.",
                      "Einzelunterricht mit spezialisiertem Snowboardlehrer für alle Levels. Dauer: 55 Minuten. Täglich von 9:00 bis 16:00 verfügbar.",
                      "Individual lessons with specialized snowboard instructor for all levels. Duration: 55 minutes. Available daily from 9:00 to 16:00."
                    )}
                  </p>
                </div>
                <PriceTable
                  icon={Clock}
                  title={d("Lezioni Private - 1 ora = 55 min.", "Privatunterricht - 1 Stunde = 55 Min.", "Private Lessons - 1 hour = 55 min.")}
                  rows={[
                    { label: d("1 persona", "1 Person", "1 person"), high: "€ 60/h", low: "€ 55/h" },
                    { label: d("2 persone", "2 Personen", "2 people"), high: "+ € 15/h", low: "+ € 15/h" },
                    { label: d("3 persone", "3 Personen", "3 people"), high: "+ € 15/h", low: "+ € 15/h" },
                    { label: d("Dalle ore 13:00", "Ab 13:00 Uhr", "From 1:00 PM"), high: "€ 70/h", low: "€ 70/h" },
                  ]}
                  note={d("1 ora privata = 55 minuti", "1 Privatstunde = 55 Minuten", "1 private hour = 55 minutes")}
                />
              </div>
            </motion.div>

            {/* Group Snowboard */}
            <motion.div
              id="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-alpine-sky w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {d("Corso Collettivo Snowboard", "Snowboard Gruppenkurs", "Snowboard Group Course")}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img src={imgGroup} alt={d("Corso collettivo snowboard Dobbiaco", "Snowboard Gruppenkurs Toblach", "Snowboard group course Dobbiaco")} className="rounded-2xl w-full h-64 md:h-80 lg:h-96 object-cover object-bottom" />
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {d(
                      "Corsi collettivi di snowboard. Gruppi di minimo 3 persone. Dal lunedì al venerdì/sabato, ore 10:00–11:50.",
                      "Snowboard-Gruppenkurse. Gruppen ab 3 Personen. Montag bis Freitag/Samstag, 10:00–11:50.",
                      "Group snowboard courses. Groups of minimum 3 people. Monday to Friday/Saturday, 10:00–11:50."
                    )}
                  </p>
                </div>
                <PriceTable
                  icon={Users}
                  title={d("Corso Collettivo 2 ore", "Gruppenkurs 2 Stunden", "Group Course 2 hours")}
                  rows={[
                    { label: d("1 giorno", "1 Tag", "1 day"), high: "€ 62", low: "€ 57" },
                    { label: d("2 giorni", "2 Tage", "2 days"), high: "€ 113", low: "€ 102" },
                    { label: d("3 giorni", "3 Tage", "3 days"), high: "€ 150", low: "€ 140" },
                    { label: d("4 giorni", "4 Tage", "4 days"), high: "€ 180", low: "€ 165" },
                    { label: d("5 giorni", "5 Tage", "5 days"), high: "€ 185", low: "€ 175" },
                  ]}
                />
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/50 rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              {d("Caratteristiche", "Merkmale", "Features")}
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

export default SnowboardPage;
