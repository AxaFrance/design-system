import { render, screen } from "@testing-library/react";
import { ContentItemMono } from "../ContentItemMono";
import { ContentItemMonoSize } from "../constants";

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

  it("should have custom class and M size", () => {
    const className = "custom-class";

    render(<ContentItemMono className={className}>Content</ContentItemMono>);

    expect(
      screen.getByText("Content").parentElement?.parentElement,
    ).toHaveClass(`${className} ${className}--m`);
  });

  it("should have XL size and no tertiary text", () => {
    const className = "custom-class";

    render(
      <ContentItemMono
        className={className}
        size={ContentItemMonoSize.XL}
        tertiaryText="tertiaryText"
      >
        Content
      </ContentItemMono>,
    );

    expect(
      screen.getByText("Content").parentElement?.parentElement,
    ).toHaveClass(`${className} ${className}--xl`);
    expect(screen.queryByText("tertiaryText")).not.toBeInTheDocument();
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

  it("should be disabled", () => {
    const className = "custom-class";

    render(
      <ContentItemMono className={className} isDisabled>
        Content
      </ContentItemMono>,
    );

    expect(
      screen.getByText("Content").parentElement?.parentElement,
    ).toHaveClass(`${className} ${className}--disabled`);
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
