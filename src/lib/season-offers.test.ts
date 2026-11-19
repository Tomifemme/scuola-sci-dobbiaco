import { describe, expect, it } from "vitest";
import { SEASON_OFFERS } from "./season-offers";

describe("2026/2027 leaflet offers", () => {
  it("offers the second person free for private lessons from 9 to 10", () => {
    expect(SEASON_OFFERS.morning.fromHour).toBe(9);
    expect(SEASON_OFFERS.morning.toHour).toBe(10);
    expect(SEASON_OFFERS.morning.freeAdditionalPeople).toBe(1);
  });
  it("preserves this season's morning exclusions", () => {
    expect(SEASON_OFFERS.morning.excluded).toEqual([{ start: "2026-12-21", end: "2027-01-09" }, { start: "2027-01-31", end: "2027-02-27" }]);
  });
  it("gives families of three 15 percent off at least four days, without combining offers", () => {
    expect(SEASON_OFFERS.family).toEqual({ people: 3, minimumDays: 4, discountPercent: 15, combinable: false });
  });
  it("uses official local Premiere dates with the leaflet's five-day discount and voucher", () => {
    expect(SEASON_OFFERS.premiere).toEqual({ start: "2026-11-28", end: "2026-12-19", days: 5, discountPercent: 15, voucherRequired: true, combinable: false });
  });
  it("uses current Springdays dates with the leaflet's minimum five-day 15 percent discount", () => {
    expect(SEASON_OFFERS.spring).toEqual({ start: "2027-03-14", end: "2027-04-04", minimumDays: 5, discountPercent: 15 });
  });
});