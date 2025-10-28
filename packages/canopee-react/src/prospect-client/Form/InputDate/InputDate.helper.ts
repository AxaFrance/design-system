export const formatInputDateValue = (value?: Date | string) =>
  value instanceof Date ? value.toISOString().split("T")[0] : value;
