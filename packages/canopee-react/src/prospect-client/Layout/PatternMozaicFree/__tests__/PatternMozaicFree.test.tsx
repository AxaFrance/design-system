import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { PatternMozaicFree } from "../PatternMozaicFree";

describe("PatternMozaicFree", () => {
  it("renders its children with two columns by default", () => {
    render(
      <PatternMozaicFree aria-label="Offers">
        <div>First</div>
        <div>Second</div>
      </PatternMozaicFree>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section).toHaveClass("af-pattern-mozaic-free");
    expect(section.style.getPropertyValue("--mozaic-free-cols")).toBe("2");
    expect(section).toHaveTextContent("FirstSecond");
  });

  it.each([1, 3, 5])("sets %i columns without enabling subgrid", (cols) => {
    render(
      <PatternMozaicFree cols={cols} aria-label="Offers">
        Content
      </PatternMozaicFree>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section.style.getPropertyValue("--mozaic-free-cols")).toBe(
      String(cols),
    );
    expect(section).not.toHaveClass("subgrid");
  });

  it("forwards native props and refs while preserving styles and merging classes", () => {
    const ref = createRef<HTMLElement>();
    render(
      <PatternMozaicFree
        ref={ref}
        id="offers"
        aria-label="Offers"
        className="custom af-pattern-mozaic-free"
        style={{ color: "red" }}
      >
        Content
      </PatternMozaicFree>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section).toHaveAttribute("id", "offers");
    expect(section.className).toBe("af-pattern-mozaic-free custom");
    expect(section.style.color).toBe("red");
    expect(section.style.getPropertyValue("--mozaic-free-cols")).toBe("2");
    expect(ref.current).toBe(section);
  });
});
