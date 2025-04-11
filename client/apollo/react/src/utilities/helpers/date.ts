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
      const day = String(value.getUTCDate()).padStart(2, "0");
      const month = String(value.getUTCMonth() + 1).padStart(2, "0");
      const year = value.getUTCFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  return value.toString();
};
