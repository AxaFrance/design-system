import {
  formatDateTextValue,
  isNotValidDay,
  isNotValidDayDecimal,
  isNotValidMillennium,
  isNotValidMonth,
  isNotValidMonthDecimal,
  isValidDigit,
} from "../InputDateTextHelper";

describe("isNotValidDayDecimal", () => {
  it("should return true for invalid first day digit", () => {
    expect(isNotValidDayDecimal("4", 0)).toBe(true);
  });

  it("should return false for valid first day digit", () => {
    expect(isNotValidDayDecimal("3", 0)).toBe(false);
  });
});

describe("isNotValidDay", () => {
  it("should return true for invalid second day digit", () => {
    expect(isNotValidDay(32, 1)).toBe(true);
  });

  it("should return false for valid second day digit", () => {
    expect(isNotValidDay(25, 1)).toBe(false);
  });
});

describe("isNotValidMonthDecimal", () => {
  it("should return false for valid first month digit", () => {
    expect(isNotValidMonthDecimal("1", 2)).toBe(false);
  });

  it("should return false for valid first month digit", () => {
    expect(isNotValidMonthDecimal("0", 2)).toBe(false);
  });

  it("should return true for invalid first month digit", () => {
    expect(isNotValidMonthDecimal("2", 2)).toBe(true);
  });
});

describe("isNotValidMonth", () => {
  it("should return true for invalid second month digit", () => {
    expect(isNotValidMonth(13, 3)).toBe(true);
  });

  it("should return true for invalid second month digit", () => {
    expect(isNotValidMonth(0, 3)).toBe(true);
  });

  it("should return false for valid second month digit", () => {
    expect(isNotValidMonth(11, 3)).toBe(false);
  });
});

describe("isNotValidMillennium", () => {
  it("should return true for invalid millennium digit", () => {
    expect(isNotValidMillennium("0", 4)).toBe(true);
  });

  it("should return false for valid millennium digit", () => {
    expect(isNotValidMillennium("2", 4)).toBe(false);
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
