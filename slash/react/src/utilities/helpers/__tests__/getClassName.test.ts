import { describe, expect, it } from "vitest";
import { clsx, getClassName } from "../getClassName";

describe("clsx", () => {
  it("returns an empty string if no arguments", () => {
    expect(clsx()).toBe("");
  });

  it("joins multiple class names", () => {
    expect(clsx("a", "b", "c")).toBe("a b c");
  });

  it("ignores falsy values (false, undefined, empty string)", () => {
    expect(clsx("a", false, undefined, "", "b")).toBe("a b");
  });

  it("returns only truthy class names", () => {
    expect(clsx(false, undefined, "foo")).toBe("foo");
  });
});

describe("getClassName", () => {
  it("returns only the component class name if no modifiers or custom class", () => {
    expect(getClassName({ defaultClassName: "af-test" })).toBe("af-test");
  });

  it("appends modifiers as BEM classes and ignores falsy values", () => {
    expect(
      getClassName({
        defaultClassName: "af-test",
        modifiers: ["primary", false, undefined, "secondary"],
      }),
    ).toBe("af-test af-test--primary af-test--secondary");
  });

  it("appends custom class name", () => {
    expect(
      getClassName({
        defaultClassName: "af-test",
        className: "my-custom-class",
      }),
    ).toBe("af-test my-custom-class");
  });

  it("appends both modifiers and custom class name", () => {
    expect(
      getClassName({
        defaultClassName: "af-test",
        modifiers: ["primary"],
        className: "my-custom-class",
      }),
    ).toBe("af-test af-test--primary my-custom-class");
  });
});
