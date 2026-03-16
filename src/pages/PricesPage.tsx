import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Tag, Users, Clock, Percent, Star } from "lucide-react";
import instructorsImg from "@/assets/instructors.jpg";

const PricesPage = () => {
  const { lang } = useLanguage();
  const p = translations.pages.prices;

  const priceCategories = [
    { icon: Users, ...p.categories.groupCourse, prices: [
      { period: { it: "1 giorno", de: "1 Tag", en: "1 day" }[lang], price: "€ 55" },
      { period: { it: "3 giorni", de: "3 Tage", en: "3 days" }[lang], price: "€ 140" },
      { period: { it: "4 giorni", de: "4 Tage", en: "4 days" }[lang], price: "€ 165" },
      { period: { it: "5 giorni", de: "5 Tage", en: "5 days" }[lang], price: "€ 185" },
      { period: { it: "6 giorni", de: "6 Tage", en: "6 days" }[lang], price: "€ 200" },
    ]},
    { icon: Clock, ...p.categories.privateLessons, prices: [
      { period: { it: "1 ora (1 pers.)", de: "1 Std. (1 Pers.)", en: "1 hour (1 pers.)" }[lang], price: "€ 55" },
      { period: { it: "1 ora (2 pers.)", de: "1 Std. (2 Pers.)", en: "1 hour (2 pers.)" }[lang], price: "€ 70" },
      { period: { it: "2 ore (1 pers.)", de: "2 Std. (1 Pers.)", en: "2 hours (1 pers.)" }[lang], price: "€ 105" },
      { period: { it: "3 ore (1 pers.)", de: "3 Std. (1 Pers.)", en: "3 hours (1 pers.)" }[lang], price: "€ 150" },
      { period: { it: "Giornata intera", de: "Ganztag", en: "Full day" }[lang], price: "€ 290" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title={t(p.title, lang)} subtitle={t(p.subtitle, lang)} image={instructorsImg} />

      <section className="alpine-section">
        <div className="alpine-container">
          {/* Special Offers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Star className="w-8 h-8 text-alpine-gold mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.adventureDay.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.adventureDay.desc, lang)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Tag className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.earlyBird.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.earlyBird.desc, lang)}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">{t(p.earlyBird.note, lang)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Percent className="w-8 h-8 text-alpine-forest mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(p.familyDiscount.title, lang)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(p.familyDiscount.desc, lang)}</p>
            </motion.div>
          </div>

          {/* Price Tables */}
          <div className="grid md:grid-cols-2 gap-8">
            {priceCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="p-6 border-b border-border" style={{ background: "var(--gradient-alpine)" }}>
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-6 h-6 text-primary-foreground" />
                    <h3 className="font-display text-lg font-bold text-primary-foreground">
                      {typeof cat === 'object' && 'it' in cat ? "" : ""}
                      {{ it: (cat as any).it, de: (cat as any).de, en: (cat as any).en }[lang] || Object.values(p.categories)[i] && t(Object.values(p.categories)[i], lang)}
                    </h3>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {cat.prices.map((price, j) => (
                    <div key={j} className="flex justify-between items-center px-6 py-4">
                      <span className="text-foreground font-body">{price.period}</span>
                      <span className="font-display font-bold text-primary text-lg">{price.price}</span>
                    </div>
                  ))}
                </div>
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
