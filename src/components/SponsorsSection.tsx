import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import snowtrex from "@/assets/sponsor-snowtrex.png.asset.json";
import autonuvola from "@/assets/sponsor-autonuvola.png.asset.json";
import rienz from "@/assets/sponsor-rienz.png.asset.json";
import snowspace from "@/assets/sponsor-snowspace.png.asset.json";
import dreizinnen from "@/assets/sponsor-dreizinnen.png.asset.json";

const labels = {
  it: "I nostri partner",
  de: "Unsere Partner",
  en: "Our Partners",
};

const sponsors = [
  { name: "SnowTrex", logo: snowtrex, href: "https://www.snowtrex.it/" },
  { name: "AutoNuvola", logo: autonuvola, href: "https://www.autonuvola.com/it/home" },
  { name: "Restaurant Rienz", logo: rienz, href: "https://restaurant-rienz.com/" },
  { name: "Snowspace Ski Rent", logo: snowspace, href: "https://www.ski-rent.it/" },
  { name: "Drei Zinnen Tre Cime", logo: dreizinnen, href: "https://3zinnen.it/" },
];

const SponsorsSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="alpine-section bg-background border-t border-border">
      <div className="alpine-container">
        <h3 className="alpine-subheading text-center mb-10">{labels[lang]}</h3>
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sponsor.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-card rounded-xl border border-border px-6 py-4 h-24 w-44 md:w-48 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <img
                src={sponsor.logo.url}
                alt={sponsor.name}
                loading="lazy"
                className="max-h-16 max-w-full object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
