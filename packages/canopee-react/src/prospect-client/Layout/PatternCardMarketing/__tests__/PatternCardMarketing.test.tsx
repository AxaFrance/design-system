import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { PatternCardMarketing } from "../PatternCardMarketing";

describe("PatternCardMarketing", () => {
  it.each([1, 2, 3, 4])("renders %i cards in their original order", (count) => {
    render(
      <PatternCardMarketing aria-label="Offers">
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>Card {index + 1}</div>
        ))}
      </PatternCardMarketing>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section).toHaveClass("af-pattern-card-marketing");
    expect(Array.from(section.children, (child) => child.textContent)).toEqual(
      Array.from({ length: count }, (_, index) => `Card ${index + 1}`),
    );
  });

  it("forwards native props, styles and refs and merges class names", () => {
    const ref = createRef<HTMLElement>();
    render(
      <PatternCardMarketing
        ref={ref}
        id="offers"
        aria-label="Offers"
        className="custom af-pattern-card-marketing"
        style={{ color: "red" }}
      >
        Content
      </PatternCardMarketing>,
    );
    const section = screen.getByRole("region", { name: "Offers" });
    expect(section).toHaveAttribute("id", "offers");
    expect(section.className).toBe("af-pattern-card-marketing custom");
    expect(section.style.color).toBe("red");
    expect(ref.current).toBe(section);
  });
});
