import type { Language } from "@/i18n/translations";
import crossCountryShare from "@/assets/cross-country-dobbiaco-share.jpg.asset.json";

const BASE = "https://scuolasci-dobbiaco.com";

export type PageKey = "index" | "lessons" | "kids" | "snowboard" | "freeride" | "gallery" | "contact" | "crossCountry";

type Entry = Record<Language, { title: string; description: string }>;

export const SLUGS: Record<PageKey, string> = {
  index: "",
  lessons: "/lessons",
  crossCountry: "/cross-country",
  kids: "/kids",
  snowboard: "/snowboard",
  freeride: "/freeride",
  gallery: "/gallery",
  contact: "/contact",
};

export const PAGE_SEO: Record<PageKey, Entry> = {
  crossCountry: {
    it: {
      title: "Sci da fondo Dobbiaco | Scuola Sci Dobbiaco",
      description: "Cerchi una scuola sci da fondo a Dobbiaco? La Scuola Sci Dobbiaco offre lezioni private e corsi collettivi di sci da fondo nelle Dolomiti. Scopri prezzi e prenotazioni.",
    },
    de: {
      title: "Langlauf Toblach | Langlaufkurse – Skischule Toblach",
      description: "Langlaufschule in Toblach gesucht? Die Skischule Toblach bietet Langlauf-Privatunterricht und Gruppenkurse in den Dolomiten. Preise und Buchung entdecken.",
    },
    en: {
      title: "Cross-country ski lessons Dobbiaco | Ski School Toblach",
      description: "Cross-country ski school in Dobbiaco (Toblach): private lessons and group cross-country skiing courses with Ski School Dobbiaco. View prices and book your lesson.",
    },
  },
  index: {
    it: {
      title: "Scuola Sci Dobbiaco | Corsi di sci nelle Dolomiti",
      description:
        "Scuola Sci Dobbiaco: lezioni di sci per adulti e bambini sulle piste Rienza a Dobbiaco e sul Monte Elmo a Versciaco, nel comprensorio 3 Zinnen Dolomites.",
    },
    de: {
      title: "Skischule Toblach | Skikurse in den Dolomiten",
      description:
        "Skischule Toblach: Skikurse für Erwachsene und Kinder an der Rienzpiste in Toblach und am Helm in Vierschach, im Skigebiet 3 Zinnen Dolomites.",
    },
    en: {
      title: "Ski School Dobbiaco / Toblach | Ski Lessons in the Dolomites",
      description:
        "Ski School Dobbiaco (Toblach): ski lessons for adults and children at Rienz and Monte Elmo (Helm), Versciaco (Vierschach), in the 3 Zinnen Dolomites ski area.",
    },
  },
  lessons: {
    it: {
      title: "Corsi di sci per adulti | Scuola Sci Dobbiaco",
      description:
        "Lezioni private e corsi collettivi con la Scuola Sci Dobbiaco sulle piste Rienza e sul Monte Elmo a Versciaco, nelle 3 Zinnen Dolomites. Per ogni livello.",
    },
    de: {
      title: "Skikurse für Erwachsene | Skischule Toblach",
      description:
        "Privatstunden und Gruppenkurse mit der Skischule Toblach an der Rienzpiste und am Helm in Vierschach, im Skigebiet 3 Zinnen Dolomites. Für jedes Niveau.",
    },
    en: {
      title: "Adult Ski Lessons | Ski School Dobbiaco",
      description:
        "Private and group ski lessons with Ski School Dobbiaco at Rienz and Monte Elmo (Helm) in Versciaco (Vierschach), 3 Zinnen Dolomites. For every level.",
    },
  },
  kids: {
    it: {
      title: "Corsi di sci per bambini | Scuola Sci Dobbiaco",
      description:
        "Corsi di sci per bambini a Dobbiaco: Yeti Park, corsi collettivi, Adventure Day con pranzo incluso. Maestri specializzati nell'insegnamento ai più piccoli.",
    },
    de: {
      title: "Kinderskikurse | Skischule Toblach",
      description:
        "Kinderskikurse in Toblach: Yeti Park, Gruppenkurse, Adventure Day mit Mittagessen. Skilehrer mit Erfahrung im Unterricht für die Kleinen.",
    },
    en: {
      title: "Kids Ski Lessons | Ski School Dobbiaco",
      description:
        "Kids ski lessons in Dobbiaco / Toblach: Yeti Park, group courses, Adventure Day with lunch included. Instructors specialised in teaching children.",
    },
  },
  snowboard: {
    it: {
      title: "Corsi di snowboard | Scuola Sci Dobbiaco",
      description:
        "Lezioni di snowboard a Dobbiaco, Alta Pusteria. Corsi per principianti e avanzati con maestri qualificati nelle 3 Zinnen Dolomites.",
    },
    de: {
      title: "Snowboardkurse | Skischule Toblach",
      description:
        "Snowboardkurse in Toblach, Hochpustertal. Kurse für Anfänger und Fortgeschrittene mit qualifizierten Lehrern in den 3 Zinnen Dolomites.",
    },
    en: {
      title: "Snowboard Lessons | Ski School Dobbiaco",
      description:
        "Snowboard lessons in Dobbiaco / Toblach, Alta Pusteria. Courses for beginners and advanced riders in the 3 Zinnen Dolomites.",
    },
  },
  freeride: {
    it: {
      title: "Freeride e sci fuoripista | Scuola Sci Dobbiaco",
      description:
        "Freeride e sci fuoripista nelle Dolomiti con guide e maestri della Scuola Sci Dobbiaco. Neve fresca, sicurezza e itinerari su misura.",
    },
    de: {
      title: "Freeride und Tiefschnee | Skischule Toblach",
      description:
        "Freeride und Tiefschneefahren in den Dolomiten mit den Skilehrern der Skischule Toblach. Pulverschnee, Sicherheit und individuelle Touren.",
    },
    en: {
      title: "Freeride & Off-Piste Skiing | Ski School Dobbiaco",
      description:
        "Freeride and off-piste skiing in the Dolomites with the instructors of Ski School Dobbiaco / Toblach. Powder snow, safety and tailor-made routes.",
    },
  },
  gallery: {
    it: {
      title: "Galleria fotografica | Scuola Sci Dobbiaco",
      description:
        "Foto delle nostre lezioni, dei maestri e delle piste delle Dolomiti - Scuola Sci Dobbiaco, 3 Zinnen Dolomites.",
    },
    de: {
      title: "Fotogalerie | Skischule Toblach",
      description:
        "Bilder unserer Kurse, Skilehrer und der Pisten der Dolomiten - Skischule Toblach, 3 Zinnen Dolomites.",
    },
    en: {
      title: "Photo Gallery | Ski School Dobbiaco",
      description:
        "Photos of our lessons, instructors and the slopes of the Dolomites - Ski School Dobbiaco / Toblach, 3 Zinnen Dolomites.",
    },
  },
  contact: {
    it: {
      title: "Contatti e prenotazioni | Scuola Sci Dobbiaco",
      description:
        "Contatta la Scuola Sci Dobbiaco per prenotare lezioni di sci e snowboard. Telefono, email e modulo di prenotazione online.",
    },
    de: {
      title: "Kontakt und Buchung | Skischule Toblach",
      description:
        "Kontaktieren Sie die Skischule Toblach, um Ski- und Snowboardkurse zu buchen. Telefon, E-Mail und Online-Buchungsformular.",
    },
    en: {
      title: "Contact & Booking | Ski School Dobbiaco",
      description:
        "Contact Ski School Dobbiaco / Toblach to book ski and snowboard lessons. Phone, email and online booking form.",
    },
  },
};

const LOCALE: Record<Language, string> = { it: "it_IT", de: "de_DE", en: "en_US" };

const prefix = (lang: Language) => (lang === "it" ? "" : `/${lang}`);

export const localizedPath = (page: PageKey, lang: Language) =>
  `${prefix(lang)}${SLUGS[page]}` || "/";

export function pageHead(page: PageKey, lang: Language) {
  const entry = PAGE_SEO[page][lang];
  const url = `${BASE}${localizedPath(page, lang)}`;
  const alt = (l: Language) => `${BASE}${localizedPath(page, l)}`;

  return {
    meta: [
      { title: entry.title },
      { name: "description", content: entry.description },
      { property: "og:title", content: entry.title },
      { property: "og:description", content: entry.description },
      { property: "og:url", content: url },
      { property: "og:type", content: page === "index" ? "website" : "article" },
      { property: "og:locale", content: LOCALE[lang] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: entry.title },
      { name: "twitter:description", content: entry.description },
      ...(page === "crossCountry" ? [
        { property: "og:image", content: `${BASE}${crossCountryShare.url}` },
        { name: "twitter:image", content: `${BASE}${crossCountryShare.url}` },
      ] : []),
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "it", href: alt("it") },
      { rel: "alternate", hrefLang: "de", href: alt("de") },
      { rel: "alternate", hrefLang: "en", href: alt("en") },
      { rel: "alternate", hrefLang: "x-default", href: alt("it") },
    ],
  };
}
