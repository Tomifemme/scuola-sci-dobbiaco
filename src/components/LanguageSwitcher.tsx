import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 rounded text-xs font-bold transition-all ${
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
