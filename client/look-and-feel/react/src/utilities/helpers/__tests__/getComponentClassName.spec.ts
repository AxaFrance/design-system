import { getComponentClassName } from "../getComponentClassName";

describe("getComponentClassName", () => {
  let defaultClassName = "";
  let className = "";
  let classModifier = "";

  it("Should return empty when no className and no defaultClassName", () => {
    const componentClassName = getComponentClassName(
      defaultClassName,
      className,
      classModifier,
    );

    expect(componentClassName).toEqual("");
  });

  it("Should return defaultClassName when no className", () => {
    defaultClassName = "default";
    className = "";
    classModifier = "";

    const componentClassName = getComponentClassName(
      defaultClassName,
      className,
      classModifier,
    );

    expect(componentClassName).toEqual("default");
  });

  it("classModifier should do nothing when no className and no defaultClassName", () => {
    defaultClassName = "";
    className = "";
    classModifier = "mod1";

    const componentClassName = getComponentClassName(
      defaultClassName,
      className,
      classModifier,
    );

    expect(componentClassName).toEqual("");
  });

  it("single classModifier should add modifier to default defaultClassName", () => {
    defaultClassName = "default";
    className = "foo";
    classModifier = "mod1";

    const componentClassName = getComponentClassName(
      defaultClassName,
      className,
      classModifier,
    );

    expect(componentClassName).toEqual("default foo default--mod1");
  });

  it("multiple classModifier should add modifiers to defaultClassName", () => {
    defaultClassName = "default";
    className = "foo";
    classModifier = "mod1 mod2";

    const componentClassName = getComponentClassName(
      defaultClassName,
      className,
      classModifier,
    );

    expect(componentClassName).toEqual(
      "default foo default--mod1 default--mod2",
    );
  });
});
