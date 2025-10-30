import {
  formatInputDateValue,
  formatDateTextValue,
  isValidDay,
  isValidDayDecimal,
  isValidMillennium,
  isValidMonth,
  isValidMonthDecimal,
  isValidDigit,
} from "../InputDate.helper";

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

describe("isValidDayDecimal", () => {
  it("should return false for invalid first day digit", () => {
    expect(isValidDayDecimal("4", 0)).toBe(false);
  });

  it("should return true for valid first day digit", () => {
    expect(isValidDayDecimal("3", 0)).toBe(true);
  });
});

describe("isValidDay", () => {
  it("should return false for invalid second day digit", () => {
    expect(isValidDay(32, 1)).toBe(false);
  });

  it("should return true for valid second day digit", () => {
    expect(isValidDay(25, 1)).toBe(true);
  });
});

describe("isValidMonthDecimal", () => {
  it("should return true for valid first month digit", () => {
    expect(isValidMonthDecimal("1", 2)).toBe(true);
  });

  it("should return true for valid first month digit", () => {
    expect(isValidMonthDecimal("0", 2)).toBe(true);
  });

  it("should return false for invalid first month digit", () => {
    expect(isValidMonthDecimal("2", 2)).toBe(false);
  });
});

describe("isValidMonth", () => {
  it("should return false for invalid second month digit", () => {
    expect(isValidMonth(13, 3)).toBe(false);
  });

  it("should return false for invalid second month digit", () => {
    expect(isValidMonth(0, 3)).toBe(false);
  });

  it("should return true for valid second month digit", () => {
    expect(isValidMonth(11, 3)).toBe(true);
  });
});

describe("isValidMillennium", () => {
  it("should return false for invalid millennium digit", () => {
    expect(isValidMillennium("0", 4)).toBe(false);
  });

  it("should return true for valid millennium digit", () => {
    expect(isValidMillennium("2", 4)).toBe(true);
  });
});

describe("isValidDigit", () => {
  it("should return false for non-numeric character", () => {
    expect(isValidDigit("a", 0, [])).toBe(false);
  });

  it("should return false for invalid day decimal", () => {
    expect(isValidDigit("4", 0, [])).toBe(false);
  });

  it("should return false for invalid day", () => {
    expect(isValidDigit("2", 1, ["3"])).toBe(false);
  });

  it("should return false for invalid month decimal", () => {
    expect(isValidDigit("2", 2, ["1", "5"])).toBe(false);
  });

  it("should return true for valid month", () => {
    expect(isValidDigit("3", 3, ["1", "2", "0"])).toBe(true);
  });

  it("should return true for valid day", () => {
    expect(isValidDigit("5", 1, ["2"])).toBe(true);
  });
});

const dates = [
  ["0", "0"],
  ["00", "0"],
  ["01", "01"],
  ["012", "01"],
  ["014", "01"],
  ["010", "01/0"],
  ["011", "01/1"],
  ["0100", "01/0"],
  ["0101", "01/01"],
  ["01120", "01/12"],
  ["01121", "01/12/1"],
  ["01122", "01/12/2"],
  ["011220", "01/12/20"],
  ["0112200", "01/12/200"],
  ["01122000", "01/12/2000"],
  ["01/12/2000", "01/12/2000"],
];

describe("formatDateTextValue", () => {
  it.each(dates)("should return %s for input %s", (input, expected) => {
    expect(formatDateTextValue(input)).toBe(expected);
  });
});
