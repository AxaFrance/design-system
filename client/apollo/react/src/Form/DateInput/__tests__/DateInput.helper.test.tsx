import { formatDateInputValue } from "../DateInput.helper";

describe("formatDateInputValue", () => {
  it("should return undefined if value is undefined", () => {
    expect(formatDateInputValue("date", undefined)).toBeUndefined();
    expect(formatDateInputValue("text", undefined)).toBeUndefined();
  });

  it.each([
    ["2025-04-18T00:00:00Z", "2025-04-18"],
    ["2025-04-18", "2025-04-18"],
    ["0005-04-18", "0005-04-18"],
  ])(
    "should format a Date object to ISO date format when format is 'date'",
    (date, expected) => {
      expect(formatDateInputValue("date", new Date(date))).toBe(expected);
    },
  );

  it.each([
    ["2025-04-18T00:00:00Z", "18/04/2025"],
    ["2025-04-18", "18/04/2025"],
    ["0005-04-18", "18/04/0005"],
  ])(
    "should format a Date object object to string when format is 'text'",
    (date, expected) => {
      expect(formatDateInputValue("text", new Date(date))).toBe(expected);
    },
  );

  it("should return the string value as is", () => {
    const value = "2025-04-18";
    expect(formatDateInputValue("date", value)).toStrictEqual(value);
    expect(formatDateInputValue("text", value)).toStrictEqual(value);
  });

  it("should return undefined for invalid value types", () => {
    expect(
      formatDateInputValue("date", 123 as unknown as Date),
    ).toBeUndefined();
    expect(
      formatDateInputValue("text", 123 as unknown as Date),
    ).toBeUndefined();
  });

  it("should handle edge cases for Date objects", () => {
    const date = new Date("0001-01-01");
    expect(formatDateInputValue("date", date)).toBe("0001-01-01");
    expect(formatDateInputValue("text", date)).toBe("01/01/0001");
  });
});
