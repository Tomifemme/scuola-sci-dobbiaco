import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "it",
  setLang: () => {},
});

// Runs only in the browser (called from useEffect) — SSR always renders Italian
// first, then the client switches to the stored/browser language after hydration.
const detectLang = (): Language => {
  const stored = localStorage.getItem("ski-school-lang");
  if (stored === "it" || stored === "de" || stored === "en") return stored;
  const browser = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
  if (browser.startsWith("de")) return "de";
  if (browser.startsWith("en")) return "en";
  return "it";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("it");

  useEffect(() => {
    const detected = detectLang();
    if (detected !== "it") setLang(detected);
  }, []);

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
