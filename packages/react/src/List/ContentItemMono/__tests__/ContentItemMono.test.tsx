import { render, screen } from "@testing-library/react";
import { ContentItemMono } from "../ContentItemMono";

describe("ContentItemMono", () => {
  it("should render correctly", () => {
    const children = "Content";
    const secondaryText = "Secondary Text";
    const tertiaryText = "Tertiary Text";
    const leftElement = "Left Element";

    render(
      <ContentItemMono
        secondaryText={secondaryText}
        tertiaryText={tertiaryText}
        leftElement={leftElement}
        hasStick
      >
        {children}
      </ContentItemMono>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(secondaryText)).toBeInTheDocument();
    expect(screen.getByText(tertiaryText)).toBeInTheDocument();
    expect(screen.getByText(leftElement)).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should have custom class", () => {
    const className = "custom-class";

    render(<ContentItemMono className={className}>Content</ContentItemMono>);

    expect(
      screen.getByText("Content").parentElement?.parentElement,
    ).toHaveClass(className);
  });

  it("should have custom class with modifier", () => {
    const className = "custom-class";
    const classModifier = "modifier";

    render(
      <ContentItemMono className={className} classModifier={classModifier}>
        Content
      </ContentItemMono>,
    );

    expect(
      screen.getByText("Content").parentElement?.parentElement,
    ).toHaveClass(`${className} ${className}--${classModifier}`);
  });

  it("should have XL text", () => {
    render(<ContentItemMono isXlText>Content</ContentItemMono>);

    expect(screen.getByText("Content").parentElement).toHaveClass(
      "af-content-item-mono__text-container af-content-item-mono__text-container--xl",
    );
  });

  it("should have centered left element", () => {
    const leftElement = "Left Element";
    render(
      <ContentItemMono leftElement={leftElement} isLeftElementCentered>
        Content
      </ContentItemMono>,
    );

    expect(screen.getByText(leftElement)).toHaveClass(
      "af-content-item-mono__left-container af-content-item-mono__left-container--center",
    );
  });
});
