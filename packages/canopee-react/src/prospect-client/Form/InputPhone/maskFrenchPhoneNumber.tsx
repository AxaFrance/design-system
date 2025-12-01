export function maskFrenchPhoneNumber(value: string): string {
  let numericValue = value.replace(/[^0-9]/g, "");
  numericValue = numericValue.slice(0, 10);
  let formattedValue = "";
  for (let i = 0; i < numericValue.length; i += 2) {
    formattedValue += numericValue.slice(i, i + 2);
    if (i + 2 < numericValue.length) {
      formattedValue += " ";
    }
  }
  return formattedValue;
}
