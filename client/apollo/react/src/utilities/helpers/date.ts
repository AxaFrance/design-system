const MAXIMUM_SIZE_DATE = 10;

export const formatDateInputValue = (
  format: "date" | "text",
  value?: Date | string | undefined,
): string | undefined => {
  if (!value) return undefined;

  if (value instanceof Date) {
    if (format === "date") {
      return value.toISOString().slice(0, MAXIMUM_SIZE_DATE);
    }
    if (format === "text") {
      const day = String(value.getDate()).padStart(2, "0");
      const month = String(value.getMonth() + 1).padStart(2, "0");
      const year = String(value.getFullYear()).padStart(4, "0");
      return `${day}/${month}/${year}`;
    }
  }
  if (typeof value === "string") {
    return value;
  }

  return undefined;
};
