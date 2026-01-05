import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { AccordionContextual } from "../AccordionContextualApollo";

describe("AccordionContextual", () => {
  it("renders all props and children correctly", () => {
    render(
      <AccordionContextual title="Test Title" icon="icon.svg">
        <span>Accordion Content</span>
      </AccordionContextual>,
    );

    expect(screen.getAllByRole("presentation")[0]).toHaveAttribute(
      "data-src",
      "icon.svg",
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });

  it("does not render icon if not provided", () => {
    render(<AccordionContextual title="Title Only" />);
    expect(screen.queryAllByRole("presentation")).toHaveLength(1);
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <AccordionContextual title="Test Title" icon="icon.svg">
        <span>Accordion Content</span>
      </AccordionContextual>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
