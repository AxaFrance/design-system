import { getComponentClassName } from "../getComponentClassName";

describe("getComponentClassName", () => {
  test.each([
    ["", "", "", ""],
    ["default", "", "", "default"],
    ["", "", "mod1", ""],
    ["default", "foo", "mod1", "default foo default--mod1"],
    ["default", "foo", "mod1 mod2", "default foo default--mod1 default--mod2"],
  ])(
    'when defaultClassName is "%s", className is "%s" and classModifier is "%s", should return "%s"',
    (defaultClassName, className, classModifier, expected) => {
      const componentClassName = getComponentClassName(
        defaultClassName,
        className,
        classModifier,
      );

      expect(componentClassName).toEqual(expected);
    },
  );
});
