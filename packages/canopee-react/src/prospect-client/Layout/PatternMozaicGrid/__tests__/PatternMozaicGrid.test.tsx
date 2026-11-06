import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { PatternMozaicGrid } from "../PatternMozaicGrid";
import { CardCommon } from "../../../Card/CardCommon";

describe("PatternMozaicGrid", () => {
  it("uses the default span on every child and breakpoint", () => {
    render(
      <PatternMozaicGrid>
        <CardCommon>First</CardCommon>
        <CardCommon>Second</CardCommon>
      </PatternMozaicGrid>,
    );
    for (const text of ["First", "Second"]) {
      for (const device of [
        "mobile",
        "tablet",
        "desktop-small",
        "desktop-medium",
        "desktop-large",
      ]) {
        expect(
          screen.getByText(text).style.getPropertyValue(`--cols-${device}`),
        ).toBe("2");
      }
    }
  });

  it("inherits missing values and applies overrides uniformly", () => {
    render(
      <PatternMozaicGrid
        data-cols-mobile={4}
        data-cols-desktop-small={3}
        data-cols-desktop-large={2}
      >
        <div>First</div>
        <div>Second</div>
      </PatternMozaicGrid>,
    );
    for (const text of ["First", "Second"]) {
      const { style } = screen.getByText(text);
      expect(style.getPropertyValue("--cols-mobile")).toBe("4");
      expect(style.getPropertyValue("--cols-tablet")).toBe("4");
      expect(style.getPropertyValue("--cols-desktop-small")).toBe("3");
      expect(style.getPropertyValue("--cols-desktop-medium")).toBe("3");
      expect(style.getPropertyValue("--cols-desktop-large")).toBe("2");
    }
  });

  it("preserves child styles, root props, refs and merges class names", () => {
    const ref = createRef<HTMLElement>();
    render(
      <PatternMozaicGrid
        ref={ref}
        id="offers"
        className="custom subgrid"
        aria-label="Offers"
        cols={3}
      >
        <div style={{ color: "red" }}>First</div>
        {null}
        Text
      </PatternMozaicGrid>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section).toHaveClass("af-pattern-mozaic-grid", "subgrid", "custom");
    expect(
      section.className.split(" ").filter((name) => name === "subgrid"),
    ).toHaveLength(1);
    expect(section).toHaveAttribute("id", "offers");
    expect(ref.current).toBe(section);
    expect(section).toHaveTextContent("Text");
    expect(screen.getByText("First").style.color).toBe("red");
    expect(
      screen.getByText("First").style.getPropertyValue("--cols-mobile"),
    ).toBe("3");
  });
});
