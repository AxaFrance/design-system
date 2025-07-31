import { getAriaRole, getIconFromVariant } from "../Message.helpers";
import { iconByVariant, messageVariants } from "../constants";

describe("getAriaRole", () => {
  it.each([
    { variant: messageVariants.error, expectedRole: "alert" },
    { variant: messageVariants.warning, expectedRole: "alert" },
    { variant: messageVariants.validation, expectedRole: "status" },
    { variant: messageVariants.information, expectedRole: "status" },
    { variant: messageVariants.neutral, expectedRole: "status" },
  ])(
    "should return $expectedRole role for variant $variant",
    ({ variant, expectedRole }) => {
      expect(getAriaRole(variant)).toBe(expectedRole);
    },
  );
});

describe("getIconFromVariant", () => {
  it.each([
    { variant: messageVariants.error, expectedIcon: iconByVariant.error },
    { variant: messageVariants.warning, expectedIcon: iconByVariant.warning },
    {
      variant: messageVariants.validation,
      expectedIcon: iconByVariant.validation,
    },
    {
      variant: messageVariants.information,
      expectedIcon: iconByVariant.information,
    },
    { variant: messageVariants.neutral, expectedIcon: iconByVariant.neutral },
  ])(
    "should return the correct icon for variant $variant",
    ({ variant, expectedIcon }) => {
      expect(getIconFromVariant(variant)).toBe(expectedIcon);
    },
  );

  it("should fallback to information icon for unknown variant (type cast)", () => {
    // @ts-expect-error: purposely passing an invalid variant
    expect(getIconFromVariant("unknown")).toBe(iconByVariant.information);
  });
});
