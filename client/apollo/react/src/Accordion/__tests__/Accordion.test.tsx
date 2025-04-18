import { render, screen } from "@testing-library/react";
import { Accordion } from "../AccordionApollo";

describe("Accordion", () => {
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
      <Accordion
        icon={icon}
        title={title}
        subtitle={subtitle}
        tagLabel={tag}
        dateLabel={date}
        value={value}
      >
        {children}
      </Accordion>,
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
    ).toHaveClass("af-accordion");
  });

  it("renders with isTitleFirst false", () => {
    render(
      <Accordion
        icon="icon"
        title="Accordion Title"
        dateLabel="date"
        isTitleFirst={false}
      >
        Accordion Content
      </Accordion>,
    );

    // const summary = screen.getByText("Accordion Title").closest("summary");
    const summary = screen.getByText("Accordion Title").closest("summary");
    expect(summary).not.toHaveClass("af-accordion__summary--title-first");
    expect(screen.queryByText("icon")).toBeNull();

    expect(
      screen
        .getByText("date")
        .compareDocumentPosition(screen.getByText("Accordion Title")),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("renders with isTitleFirst true", () => {
    render(
      <Accordion
        icon="icon"
        title="Accordion Title"
        dateLabel="date"
        isTitleFirst
      >
        Accordion Content
      </Accordion>,
    );

    const summary = screen.getByText("Accordion Title").closest("summary");
    expect(summary).toHaveClass("af-accordion__summary title-first");
    expect(screen.getByText("icon").parentElement).toHaveClass(
      "af-accordion__title-container",
    );

    expect(
      screen
        .getByText("date")
        .compareDocumentPosition(screen.getByText("Accordion Title")),
    ).toBe(Node.DOCUMENT_POSITION_PRECEDING);
  });

  it("renders on mobile", () => {
    global.innerWidth = 500;
    render(
      <Accordion icon="icon" title="Accordion Title" dateLabel="date">
        Accordion Content
      </Accordion>,
    );

    expect(screen.getByText("icon").parentElement).toHaveClass(
      "af-accordion__summary",
    );
  });
});
