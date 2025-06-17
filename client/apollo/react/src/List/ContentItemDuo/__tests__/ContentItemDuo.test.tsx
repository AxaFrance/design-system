import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ContentItemDuo } from "../ContentItemDuoCommon";
import { Button } from "../../../Button/ButtonApollo";

describe("ContentItemDuo", () => {
  const ContentItemDuoLabel = "Label";
  const ContentItemDuoValue = "Value";

  it("should render label and value correctly", () => {
    render(
      <ContentItemDuo
        label={ContentItemDuoLabel}
        value={ContentItemDuoValue}
        ButtonComponent={Button}
      />,
    );
    expect(screen.getByText(ContentItemDuoLabel)).toBeInTheDocument();
    expect(screen.getByText(ContentItemDuoValue)).toBeInTheDocument();
  });

  it("should render button with correct text and call onClick handler", async () => {
    const buttonText = "En savoir plus";
    const onButtonClick = vi.fn();
    render(
      <ContentItemDuo
        label={ContentItemDuoLabel}
        value={ContentItemDuoValue}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
        ButtonComponent={Button}
      />,
    );
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement);
    await waitFor(() => {
      expect(onButtonClick).toHaveBeenCalled();
    });
  });

  it("should render vertical layout when isVertical prop is true", () => {
    render(
      <ContentItemDuo
        label={ContentItemDuoLabel}
        value={ContentItemDuoValue}
        isVertical
        ButtonComponent={Button}
      />,
    );
    const ContentItemDuoVertical = screen.getByText(ContentItemDuoLabel);
    expect(ContentItemDuoVertical.parentElement).toHaveClass(
      "af-content-item-duo--vertical",
    );
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <ContentItemDuo
        label={ContentItemDuoLabel}
        value={ContentItemDuoValue}
        ButtonComponent={Button}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
