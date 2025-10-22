export const isNotValidDayDecimal = (char: string, index: number): boolean =>
  index === 0 && Number(char) > 3;

export const isNotValidDay = (day: number, index: number): boolean =>
  index === 1 && (day > 31 || day === 0);

export const isNotValidMonthDecimal = (char: string, index: number): boolean =>
  index === 2 && Number(char) > 1;

export const isNotValidMonth = (month: number, index: number): boolean =>
  index === 3 && (month > 12 || month === 0);

export const isNotValidMillennium = (char: string, index: number): boolean =>
  index === 4 && Number(char) === 0;

export const isValidDigit = (
  char: string,
  index: number,
  currentCleanValue: string[],
): boolean => {
  if (
    Number.isNaN(Number(char)) ||
    isNotValidDayDecimal(char, index) ||
    isNotValidDay(
      Number(`${Number(currentCleanValue[0])}${Number(char)}`),
      index,
    ) ||
    isNotValidMonthDecimal(char, index) ||
    isNotValidMonth(
      Number(`${Number(currentCleanValue[2])}${Number(char)}`),
      index,
    ) ||
    isNotValidMillennium(char, index)
  ) {
    return false;
  }

  return true;
};

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
