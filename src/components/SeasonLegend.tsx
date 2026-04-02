import { motion } from "framer-motion";
import { Sun, Snowflake } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const SeasonLegend = () => {
  const { lang } = useLanguage();
  const highLabel = ({ it: "Alta Stagione", de: "Hochsaison", en: "High Season" } as Record<Language, string>)[lang];
  const lowLabel = ({ it: "Bassa Stagione", de: "Nebensaison", en: "Low Season" } as Record<Language, string>)[lang];

  return (
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
          <p className="text-xs text-muted-foreground">21.12 – 09.01 | 08.02 – 08.03</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-3">
        <Snowflake className="w-5 h-5 text-primary" />
        <div>
          <p className="font-display font-bold text-foreground text-sm">{lowLabel}</p>
          <p className="text-xs text-muted-foreground">29.11 – 20.12 | 10.01 – 07.02 | 09.03 – 12.04</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SeasonLegend;
