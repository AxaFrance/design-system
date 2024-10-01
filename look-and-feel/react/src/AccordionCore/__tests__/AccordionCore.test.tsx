import { render, screen } from "@testing-library/react";
import { AccordionCore } from "../AccordionCore";

describe("AccordionCore", () => {
  it("renders correctly with all visual props", () => {
    const title = "Accordion Title";
    const children = "Accordion Content";

    render(<AccordionCore title={title}>{children}</AccordionCore>);

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

  it("should have custom class with modifier", () => {
    const className = "custom-class";
    const classModifier = "modifier";

    render(
      <AccordionCore
        title="Accordion Title"
        className={className}
        classModifier={classModifier}
      >
        Accordion Content
      </AccordionCore>,
    );

    expect(
      screen.getByText("Accordion Content").closest("details"),
    ).toHaveClass(`${className} ${className}--${classModifier}`);
  });

  it("renders Accordion with open details", () => {
    render(
      <AccordionCore title="Accordion Title" isOpen>
        Accordion Content
      </AccordionCore>,
    );

    const details = screen.getByText("Accordion Content").closest("details");
    expect(details).toHaveAttribute("open");
  });

  it("renders Accordion with close details", () => {
    render(
      <AccordionCore title="Accordion Title" isOpen={false}>
        Accordion Content
      </AccordionCore>,
    );

    const details = screen.getByText("Accordion Content").closest("details");
    expect(details).not.toHaveAttribute("open");
  });

  it("use onClick prop when summary click", () => {
    const onClick = vi.fn();
    render(
      <AccordionCore title="Accordion Title" onClick={onClick}>
        Accordion Content
      </AccordionCore>,
    );

    const summary = screen.getByText("Accordion Title");
    summary.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("renders with custom title summary", () => {
    render(
      <AccordionCore title={<p className="custom-title">Custom Title</p>}>
        Accordion Content
      </AccordionCore>,
    );

    expect(screen.getByText("Custom Title")).toHaveClass("custom-title");
  });
});
