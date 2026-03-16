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
    return (stored as Language) || "it";
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
