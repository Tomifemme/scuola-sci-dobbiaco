import { motion } from "framer-motion";
import { Sun, Snowflake } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

export type PriceRow = { label: string; high: string; low: string };

interface PriceTableProps {
  icon: React.ElementType;
  title: string;
  rows: PriceRow[];
  note?: string;
  delay?: number;
}

const PriceTable = ({ icon: Icon, title, rows, note, delay = 0 }: PriceTableProps) => {
  const { lang } = useLanguage();
  const highLabel = ({ it: "Alta", de: "Hoch", en: "High" } as Record<Language, string>)[lang];
  const lowLabel = ({ it: "Bassa", de: "Neben", en: "Low" } as Record<Language, string>)[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl overflow-hidden border border-border"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="p-4 border-b border-border" style={{ background: "var(--gradient-alpine)" }}>
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-primary-foreground" />
          <h3 className="font-display text-sm font-bold text-primary-foreground">{title}</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 py-2 bg-secondary/50 border-b border-border text-xs font-semibold text-muted-foreground">
        <span></span>
        <span className="text-center flex items-center justify-center gap-1">
          <Sun className="w-3 h-3 text-destructive" /> {highLabel}
        </span>
        <span className="text-center flex items-center justify-center gap-1">
          <Snowflake className="w-3 h-3 text-primary" /> {lowLabel}
        </span>
      </div>
      <div className="divide-y divide-border">
        {rows.map((row, j) => (
          <div key={j} className="grid grid-cols-3 items-center px-4 py-2.5">
            <span className="text-foreground font-body text-xs">{row.label}</span>
            <span className="font-display font-bold text-destructive text-center text-xs">{row.high}</span>
            <span className="font-display font-bold text-primary text-center text-xs">{row.low}</span>
          </div>
        ))}
      </div>
      {note && (
        <div className="px-4 py-2 bg-secondary/30 border-t border-border">
          <p className="text-xs text-muted-foreground italic">{note}</p>
        </div>
      )}
    </motion.div>
  );
};

export default PriceTable;
