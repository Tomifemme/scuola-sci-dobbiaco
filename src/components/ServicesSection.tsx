import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import kidsImg from "@/assets/kids-lesson.jpg";
import freerideImg from "@/assets/IMG_6020.JPG";
import snowboardImg from "@/assets/18041813380098.jpg";
import lessonImg from "@/assets/lezione.jpg";

const ServicesSection = () => {
  const { lang } = useLanguage();
  const s = translations.services;

  const services = [
    { ...s.privateLessons, image: lessonImg, alt: "Private ski lesson", link: "/lessons" },
    { ...s.kidsClub, image: kidsImg, alt: "Kids ski school", link: "/kids" },
    { ...s.freeride, image: freerideImg, alt: "Freeride Dolomites", link: "/freeride" },
    { ...s.snowboard, image: snowboardImg, alt: "Snowboard lessons", link: "/snowboard" },
  ];

  return (
    <section id="servizi" className="alpine-section bg-secondary/50">
      <div className="alpine-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{t(s.label, lang)}</p>
          <h2 className="alpine-heading text-foreground mb-4">{t(s.title, lang)}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">{t(s.subtitle, lang)}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={t(service.title, lang)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link} className="alpine-card bg-card group cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-alpine-deep/20 group-hover:bg-alpine-deep/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{t(service.title, lang)}</h3>
                  <p className="text-muted-foreground font-body mb-4">{t(service.desc, lang)}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    {t(s.learnMore, lang)} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
