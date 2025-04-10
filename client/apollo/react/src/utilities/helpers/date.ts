const MAXIMUM_SIZE_DATE = 10;

export const formatDateInputValue = (value?: Date | string | undefined) =>
  value instanceof Date
    ? value.toISOString().slice(0, MAXIMUM_SIZE_DATE)
    : value;
