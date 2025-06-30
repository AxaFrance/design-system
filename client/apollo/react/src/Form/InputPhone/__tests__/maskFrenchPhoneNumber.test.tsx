import { maskFrenchPhoneNumber } from "../maskFrenchPhoneNumber";

describe("maskFrenchPhoneNumber", () => {
  it("should format a valid French phone number", () => {
    const input = "0123456789";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should remove non-numeric characters", () => {
    const input = "01-23.45 67 89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should limit the output to 10 digits", () => {
    const input = "01234567890123456789";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should return an empty string for an empty input", () => {
    const input = "";
    const expectedOutput = "";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with less than 10 digits", () => {
    const input = "012345";
    const expectedOutput = "01 23 45";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with exactly 10 digits", () => {
    const input = "0123456789";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with more than 10 digits", () => {
    const input = "01234567890123456789";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should format numbers with spaces correctly", () => {
    const input = "01 23 45 67 89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should format numbers with dashes correctly", () => {
    const input = "01-23-45-67-89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should format numbers with mixed characters correctly", () => {
    const input = "01a23b45c67d89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with leading zeros", () => {
    const input = "0001234567";
    const expectedOutput = "00 01 23 45 67";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with trailing spaces", () => {
    const input = "0123456789   ";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with leading spaces", () => {
    const input = "   0123456789";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with mixed formatting", () => {
    const input = "01-23 45.67 89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
  it("should handle inputs with special characters", () => {
    const input = "01@23#45$67%89";
    const expectedOutput = "01 23 45 67 89";
    expect(maskFrenchPhoneNumber(input)).toBe(expectedOutput);
  });
});
