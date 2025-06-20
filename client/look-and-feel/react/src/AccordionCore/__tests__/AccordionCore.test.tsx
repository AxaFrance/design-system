import { render, screen } from "@testing-library/react";
import { AccordionCore } from "../AccordionCore";

describe("AccordionCore", () => {
  it("renders correctly with all visual props", () => {
    const title = "Accordion Title";
    const children = "Accordion Content";

    render(<AccordionCore summary={title}>{children}</AccordionCore>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(
      screen.getByText("Accordion Content").closest("details"),
    ).toHaveClass("af-accordion");

    // test that the accordion is closed by default
    const details = screen.getByText(children).closest("details");
    expect(details).not.toHaveAttribute("open");

    // test native Accordion behavior
    const summary = screen.getByText("Accordion Title");
    summary.click();
    expect(details).toHaveAttribute("open");
    summary.click();
    expect(details).not.toHaveAttribute("open");
  });
});
