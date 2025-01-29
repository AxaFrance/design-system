import { formatDateInputValue } from "../date";

describe("formatDateInputValue", () => {
  it.each([
    ["2023-10-05T00:00:00Z", "2023-10-05"],
    ["2023-10-05", "2023-10-05"],
    ["0002-10-05", "0002-10-05"],
  ])("should format Date('%s') object to string '%s'", (date, expected) => {
    const formattedDate = formatDateInputValue(new Date(date));
    expect(formattedDate).toBe(expected);
  });

  it("should return the string value as is", () => {
    const formattedDate = formatDateInputValue("2023-10-05");
    expect(formattedDate).toStrictEqual("2023-10-05");
  });

  it("should return undefined if no value is provided", () => {
    const formattedDate = formatDateInputValue();
    expect(formattedDate).toBeUndefined();
  });
});
