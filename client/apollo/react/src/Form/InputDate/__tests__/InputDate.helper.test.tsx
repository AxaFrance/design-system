import { formatInputDateValue } from "../InputDate.helper";

describe("formatInputDateValue", () => {
  it("should return undefined if value is undefined", () => {
    expect(formatInputDateValue(undefined)).toBeUndefined();
  });

  it.each([
    ["2025-04-18T00:00:00Z", "2025-04-18"],
    ["2025-04-18", "2025-04-18"],
    ["0005-04-18", "0005-04-18"],
  ])("should format a Date object to ISO date format", (date, expected) => {
    expect(formatInputDateValue(new Date(date))).toBe(expected);
  });

  it("should return the string value as is", () => {
    const value = "2025-04-18";
    expect(formatInputDateValue(value)).toStrictEqual(value);
  });

  it("should handle edge cases for Date objects", () => {
    const date = new Date("0001-01-01");
    expect(formatInputDateValue(date)).toBe("0001-01-01");
  });
});
