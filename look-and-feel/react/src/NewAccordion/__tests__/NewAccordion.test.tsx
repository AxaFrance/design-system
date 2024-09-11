import { render, screen } from "@testing-library/react";
import { NewAccordion } from "../NewAccordion";

describe("NewAccordion", () => {
  const originalWindowWidth = global.innerWidth;

  beforeAll(() => {
    global.innerWidth = originalWindowWidth;
  });

  it("renders correctly with all visual props", () => {
    const icon = "Accordion Icon";
    const title = "Accordion Title";
    const subtitle = "Accordion Subtitle";
    const children = "Accordion Content";
    const tag = "Accordion Tag";
    const date = "Accordion Date";
    const value = "Accordion Value";

    render(
      <NewAccordion
        icon={icon}
        title={title}
        subtitle={subtitle}
        tag={tag}
        date={date}
        value={value}
      >
        {children}
      </NewAccordion>,
    );

    expect(screen.getByText(icon)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(tag)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
    expect(
      screen.getByText("Accordion Content").closest("details"),
    ).toHaveClass("af-new-accordion");

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
      <NewAccordion
        title="Accordion Title"
        className={className}
        classModifier={classModifier}
      >
        Accordion Content
      </NewAccordion>,
    );

    expect(
      screen.getByText("Accordion Content").closest("details"),
    ).toHaveClass(`${className} ${className}--${classModifier}`);
  });

  it("renders Accordion with open details", () => {
    render(
      <NewAccordion title="Accordion Title" isOpen>
        Accordion Content
      </NewAccordion>,
    );

    const details = screen.getByText("Accordion Content").closest("details");
    expect(details).toHaveAttribute("open");
  });

  it("renders Accordion with close details", () => {
    render(
      <NewAccordion title="Accordion Title" isOpen={false}>
        Accordion Content
      </NewAccordion>,
    );

    const details = screen.getByText("Accordion Content").closest("details");
    expect(details).not.toHaveAttribute("open");
  });

  it("use onClick prop when summary click", () => {
    const onClick = vi.fn();
    render(
      <NewAccordion title="Accordion Title" onClick={onClick}>
        Accordion Content
      </NewAccordion>,
    );

    const summary = screen.getByText("Accordion Title");
    summary.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("renders with isTitleFirst false", () => {
    render(
      <NewAccordion
        icon="icon"
        title="Accordion Title"
        date="date"
        isTitleFirst={false}
      >
        Accordion Content
      </NewAccordion>,
    );

    const summary = screen.getByText("Accordion Title").closest("summary");
    expect(summary).not.toHaveClass("af-new-accordion__summary--title-first");
    expect(screen.queryByText("icon")).toBeNull();

    expect(
      screen
        .getByText("date")
        .compareDocumentPosition(screen.getByText("Accordion Title")),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("renders with isTitleFirst true", () => {
    render(
      <NewAccordion
        icon="icon"
        title="Accordion Title"
        date="date"
        isTitleFirst
      >
        Accordion Content
      </NewAccordion>,
    );

    const summary = screen.getByText("Accordion Title").closest("summary");
    expect(summary).toHaveClass("af-new-accordion__summary--title-first");
    expect(screen.getByText("icon").parentElement).toHaveClass(
      "af-new-accordion__title-container",
    );

    expect(
      screen
        .getByText("date")
        .compareDocumentPosition(screen.getByText("Accordion Title")),
    ).toBe(Node.DOCUMENT_POSITION_PRECEDING);
  });

  it("renders with custom title summary", () => {
    render(
      <NewAccordion title={<p className="custom-title">Custom Title</p>}>
        Accordion Content
      </NewAccordion>,
    );

    expect(screen.getByText("Custom Title")).toHaveClass("custom-title");
  });

  it("renders on mobile", () => {
    global.innerWidth = 500;
    render(
      <NewAccordion icon="icon" title="Accordion Title" date="date">
        Accordion Content
      </NewAccordion>,
    );

    expect(screen.getByText("icon").parentElement).toHaveClass(
      "af-new-accordion__summary",
    );
  });
});
