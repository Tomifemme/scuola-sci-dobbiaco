import type { Language } from "@/i18n/translations";
import type { PriceRow } from "@/components/PriceTable";

export const PRIVATE_LESSON_RATES = { high: 63, low: 60, additionalPerson: 15, peakSlot: 75 };
export const GROUP_LESSON_RATES = [
  { days: 1, high: 65, low: 60 },
  { days: 2, high: 120, low: 110 },
  { days: 3, high: 155, low: 145 },
  { days: 4, high: 185, low: 175 },
  { days: 5, high: 195, low: 185 },
];
export const ADDITIONAL_GROUP_DAY = 20;

export function privateLessonRows(lang: Language): PriceRow[] {
  const labels = {
    it: ["1 persona", "2 persone", "3 persone", "Ore 10:00–13:00 (21.12–09.01)"],
    de: ["1 Person", "2 Personen", "3 Personen", "10:00–13:00 Uhr (21.12–09.01)"],
    en: ["1 person", "2 people", "3 people", "10:00 AM–1:00 PM (21.12–09.01)"],
  }[lang];
  return [
    { label: labels[0], high: `€ ${PRIVATE_LESSON_RATES.high}/h`, low: `€ ${PRIVATE_LESSON_RATES.low}/h` },
    ...labels.slice(1, 3).map((label) => ({ label, high: `+ € ${PRIVATE_LESSON_RATES.additionalPerson}/h`, low: `+ € ${PRIVATE_LESSON_RATES.additionalPerson}/h` })),
    { label: labels[3], high: `€ ${PRIVATE_LESSON_RATES.peakSlot}/h`, low: "—" },
  ];
}

export function groupLessonRows(lang: Language): PriceRow[] {
  return [
    ...GROUP_LESSON_RATES.map(({ days, high, low }) => ({
      label: { it: `${days} ${days === 1 ? "giorno" : "giorni"}`, de: `${days} ${days === 1 ? "Tag" : "Tage"}`, en: `${days} ${days === 1 ? "day" : "days"}` }[lang],
      high: `€ ${high}`, low: `€ ${low}`,
    })),
    { label: { it: "Giorno aggiuntivo", de: "Zusatztag", en: "Additional day" }[lang], high: `+ € ${ADDITIONAL_GROUP_DAY}`, low: `+ € ${ADDITIONAL_GROUP_DAY}` },
  ];
}