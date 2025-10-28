import { describe, expect, it } from "vitest";
import { getClassName } from "../getClassName";

describe("getClassName", () => {
  it("returns only the component class name if no modifiers or custom class", () => {
    expect(getClassName({ baseClassName: "af-test" })).toBe("af-test");
  });

  it("appends modifiers as BEM classes and ignores falsy values", () => {
    expect(
      getClassName({
        baseClassName: "af-test",
        modifiers: ["primary", false, undefined, "secondary"],
      }),
    ).toBe("af-test af-test--primary af-test--secondary");
  });

  it("appends custom class name", () => {
    expect(
      getClassName({
        baseClassName: "af-test",
        className: "my-custom-class",
      }),
    ).toBe("af-test my-custom-class");
  });

  it("appends both modifiers and custom class name", () => {
    expect(
      getClassName({
        baseClassName: "af-test",
        modifiers: ["primary"],
        className: "my-custom-class",
      }),
    ).toBe("af-test af-test--primary my-custom-class");
  });
});
