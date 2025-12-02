export const formatInputDateValue = (value?: Date | string | number) =>
  value instanceof Date ? value.toISOString().split("T")[0] : value;

export const isValidDayDecimal = (char: string, index: number): boolean =>
  (index === 0 && Number(char) <= 3) || index !== 0;

export const isValidDay = (day: number, index: number): boolean =>
  (index === 1 && day <= 31 && day > 0) || index !== 1;

export const isValidMonthDecimal = (char: string, index: number): boolean =>
  (index === 2 && Number(char) <= 1) || index !== 2;

export const isValidMonth = (month: number, index: number): boolean =>
  (index === 3 && month <= 12 && month > 0) || index !== 3;

export const isValidMillennium = (char: string, index: number): boolean =>
  (index === 4 && Number(char) > 0) || index !== 4;

export const isValidDigit = (
  char: string,
  index: number,
  currentCleanValue: string[],
): boolean =>
  Number.isInteger(Number(char)) &&
  isValidDayDecimal(char, index) &&
  isValidDay(Number(`${Number(currentCleanValue[0])}${Number(char)}`), index) &&
  isValidMonthDecimal(char, index) &&
  isValidMonth(
    Number(`${Number(currentCleanValue[2])}${Number(char)}`),
    index,
  ) &&
  isValidMillennium(char, index);

export const formatDateTextValue = (value?: string): string => {
  if (!value) {
    return "";
  }

  return value
    .split("")
    .filter((char) => char !== "/")
    .filter((char, index, currentCleanValue) =>
      isValidDigit(char, index, currentCleanValue),
    )
    .map((char, index) => (index === 2 || index === 4 ? `/${char}` : char))
    .join("");
};
