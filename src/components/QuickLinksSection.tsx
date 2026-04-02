import { Users, Award, Mountain, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const QuickLinksSection = () => {
  const { lang } = useLanguage();
  const s = translations.stats;

  const stats = [
    { icon: Users, value: "1.700+", label: t(s.followers, lang) },
    { icon: Award, value: "30+", label: t(s.experience, lang) },
    { icon: Mountain, value: "3 Zinnen", label: t(s.resort, lang) },
    { icon: Snowflake, value: "100%", label: t(s.success, lang) },
  ];

  const quickLinks = [
    { label: "Skilift", href: "http://www.ski-rienza.it/" },
    { label: { it: "Noleggio Sci", de: "Skiverleih", en: "Ski Rental" }[lang], href: "https://www.ski-rent.it/it/" },
    { label: { it: "Galleria", de: "Galerie", en: "Gallery" }[lang], href: "/gallery" },
  ];

  return (
    <section className="alpine-section bg-alpine-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-alpine-sky blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="alpine-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-alpine-sky mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-alpine-ice/70 font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="alpine-subheading text-primary-foreground mb-8">{t(s.usefulLinks, lang)}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-alpine-ice/20 text-alpine-ice/90 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
