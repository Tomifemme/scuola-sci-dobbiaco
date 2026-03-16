import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const reviews = [
  {
    name: "Taddeo",
    type: { it: "Famiglia", de: "Familie", en: "Family" },
    country: "🇨🇭",
    date: { it: "marzo 2026", de: "März 2026", en: "March 2026" },
    text: {
      it: "Era molto divertente esplorare il percorso e la foresta e i maestri erano bravissimi 👏",
      de: "Es hat sehr viel Spaß gemacht, die Strecke und den Wald zu erkunden, und die Lehrer waren großartig 👏",
      en: "It was great fun exploring the route and the forest and the instructors were amazing 👏",
    },
    rating: 5,
  },
  {
    name: "Muhammad Omer",
    type: { it: "In solitaria", de: "Alleinreisend", en: "Solo" },
    country: "🇬🇧",
    date: { it: "febbraio 2026", de: "Februar 2026", en: "February 2026" },
    text: {
      it: "Mi sono divertito molto. L'istruttore Tommy è riuscito a insegnarmi molte delle basi dello sci. Alla fine dello stesso giorno sono riuscito a sciare da solo su un pendio ampio. Un'ottima prima introduzione allo sci!",
      de: "Ich hatte sehr viel Spaß. Der Instruktor Tommy hat mir die Grundlagen des Skifahrens beigebracht. Am Ende des Tages konnte ich alleine eine breite Piste hinunterfahren. Eine großartige Einführung ins Skifahren!",
      en: "I had a great time. Instructor Tommy managed to teach me many of the basics of skiing. By the end of the day I was able to ski down a wide slope on my own. A great first introduction to skiing!",
    },
    rating: 5,
  },
  {
    name: "Markus",
    type: { it: "Coppia", de: "Paar", en: "Couple" },
    country: "🇩🇪",
    date: { it: "gennaio 2026", de: "Januar 2026", en: "January 2026" },
    text: {
      it: "Abbiamo mandato due giovanissimi principianti al corso di Hans-Jörg per tre giorni, e dopo tre giorni entrambi sono riusciti a scendere dalla montagna. Semplicemente fantastico, grazie mille!",
      de: "Wir haben zwei junge Anfänger drei Tage lang zu Hans-Jörgs Kurs geschickt, und nach drei Tagen konnten beide den Berg hinunterfahren. Einfach fantastisch, vielen Dank!",
      en: "We sent two young beginners to Hans-Jörg's course for three days, and after three days both were able to ski down the mountain. Simply fantastic, thank you so much!",
    },
    rating: 5,
  },
];

const ReviewsSection = () => {
  const { lang } = useLanguage();

  const title = { it: "Cosa Dicono i Nostri Clienti", de: "Was Unsere Kunden Sagen", en: "What Our Clients Say" }[lang];
  const subtitle = { it: "Recensioni verificate da CheckYeti", de: "Verifizierte Bewertungen von CheckYeti", en: "Verified reviews from CheckYeti" }[lang];

  return (
    <section className="alpine-section bg-background">
      <div className="alpine-container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            ⭐ 4.5/5 — 42 {{ it: "recensioni", de: "Bewertungen", en: "reviews" }[lang]}
          </p>
          <h2 className="alpine-heading text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground font-body">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">
                "{review.text[lang]}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  {review.country}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.type[lang]} · {review.date[lang]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.checkyeti.com/it/p/743/skischool-toblach-dobbiaco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold text-sm"
          >
            {{ it: "Vedi tutte le recensioni su CheckYeti →", de: "Alle Bewertungen auf CheckYeti ansehen →", en: "See all reviews on CheckYeti →" }[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
