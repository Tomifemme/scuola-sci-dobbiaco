import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "it",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("ski-school-lang");
    if (stored === "it" || stored === "de" || stored === "en") return stored;
    const browser = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
    if (browser.startsWith("it")) return "it";
    if (browser.startsWith("en")) return "en";
    return "de";
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("ski-school-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
