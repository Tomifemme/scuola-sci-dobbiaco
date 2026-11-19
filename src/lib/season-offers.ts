export const SEASON_OFFERS = {
  season: "2026/2027",
  morning: { fromHour: 9, toHour: 10, freeAdditionalPeople: 1, excluded: [
    { start: "2026-12-21", end: "2027-01-09" },
    { start: "2027-01-31", end: "2027-02-27" },
  ] },
  family: { people: 3, minimumDays: 4, discountPercent: 15, combinable: false },
  premiere: { start: "2026-11-28", end: "2026-12-19", days: 5, discountPercent: 15, voucherRequired: true, combinable: false },
  spring: { start: "2027-03-14", end: "2027-04-04", minimumDays: 5, discountPercent: 15 },
} as const;

export function offerDateRange(start: string, end: string) {
  const display = (date: string) => date.split("-").reverse().join(".");
  return `${display(start)} – ${display(end)}`;
}