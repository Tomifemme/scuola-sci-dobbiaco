import { motion, useReducedMotion } from "framer-motion";
import { Percent, Snowflake, Sun, Tag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { SEASON_OFFERS, offerDateRange } from "@/lib/season-offers";

export default function SeasonOffers({ includeMorning = true }: { includeMorning?: boolean }) {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const p = translations.pages.prices;
  const offers = [
    ...(includeMorning ? [{ icon: Tag, title: p.earlyBird.title, desc: p.earlyBird.desc, note: t(p.earlyBird.note, lang), dates: "09:00 – 10:00" }] : []),
    { icon: Percent, title: p.familyDiscount.title, desc: p.familyDiscount.desc, note: undefined, dates: SEASON_OFFERS.season },
    { icon: Snowflake, title: p.seasonalOffers.premiere.title, desc: p.seasonalOffers.premiere.desc, note: undefined, dates: offerDateRange(SEASON_OFFERS.premiere.start, SEASON_OFFERS.premiere.end) },
    { icon: Sun, title: p.seasonalOffers.spring.title, desc: p.seasonalOffers.spring.desc, note: undefined, dates: offerDateRange(SEASON_OFFERS.spring.start, SEASON_OFFERS.spring.end) },
  ];

  return (
    <section className="mb-16" aria-labelledby="season-offers-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
        <h2 id="season-offers-heading" className="font-display text-2xl font-bold text-foreground">{t(p.seasonalOffers.heading, lang)}</h2>
        <span className="font-display text-sm font-semibold text-primary">{SEASON_OFFERS.season}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <motion.article key={t(offer.title, lang)} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="bg-card rounded-lg p-6 border border-border">
            <offer.icon aria-hidden="true" className="w-7 h-7 text-primary mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(offer.title, lang)}</h3>
            <p className="font-body text-sm font-semibold text-primary mb-3">{offer.dates}</p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{t(offer.desc, lang)}</p>
            {offer.note && <p className="text-xs leading-relaxed text-muted-foreground mt-3">{offer.note}</p>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}