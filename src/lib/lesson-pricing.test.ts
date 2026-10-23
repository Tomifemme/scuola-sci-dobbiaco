import { describe, expect, it } from "vitest";
import { privateLessonRows, groupLessonRows } from "./lesson-pricing";

describe("Shared alpine and cross-country lesson prices", () => {
  it("uses the same private lesson rates in every language", () => {
    for (const lang of ["it", "de", "en"] as const) {
      expect(privateLessonRows(lang).map(({ high, low }) => [high, low])).toEqual([
        ["€ 63/h", "€ 60/h"], ["+ € 15/h", "+ € 15/h"], ["+ € 15/h", "+ € 15/h"], ["€ 75/h", "—"],
      ]);
    }
  });
  it("uses the same one-to-five-day group rates and extra-day price in every language", () => {
    for (const lang of ["it", "de", "en"] as const) {
      expect(groupLessonRows(lang).map(({ high, low }) => [high, low])).toEqual([
        ["€ 65", "€ 60"], ["€ 120", "€ 110"], ["€ 155", "€ 145"], ["€ 185", "€ 175"], ["€ 195", "€ 185"], ["+ € 20", "+ € 20"],
      ]);
    }
  });
});