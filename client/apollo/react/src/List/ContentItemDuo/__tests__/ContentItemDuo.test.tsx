import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Button } from "../../../Button/ButtonApollo";
import { ContentItemDuoCommon } from "../ContentItemDuoCommon";

const ContentItemDuoCommonLabel = "Label";
const ContentItemDuoCommonValue = "Value";

describe("ContentItemDuoCommon", () => {
  it("should apply containerProps to the parent div", () => {
    render(
      <ContentItemDuoCommon
        label={ContentItemDuoCommonLabel}
        value={ContentItemDuoCommonValue}
        ButtonComponent={Button}
        id="custom-id"
        title="custom-title"
        className="custom-class"
      />,
    );

    const container = document.querySelector(".custom-class");
    expect(container).toHaveAttribute("id", "custom-id");
    expect(container).toHaveAttribute("title", "custom-title");
    expect(container).toHaveClass("af-content-item-duo");
  });

  it("should render label and value correctly", () => {
    render(
      <ContentItemDuoCommon
        label={ContentItemDuoCommonLabel}
        value={ContentItemDuoCommonValue}
        ButtonComponent={Button}
      />,
    );
    expect(screen.getByText(ContentItemDuoCommonLabel)).toBeInTheDocument();
    expect(screen.getByText(ContentItemDuoCommonValue)).toBeInTheDocument();
  });

  it("should render button with correct text and call onClick handler", async () => {
    const buttonText = "En savoir plus";
    const onButtonClick = vi.fn();
    render(
      <ContentItemDuoCommon
        label={ContentItemDuoCommonLabel}
        value={ContentItemDuoCommonValue}
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
      <ContentItemDuoCommon
        label={ContentItemDuoCommonLabel}
        value={ContentItemDuoCommonValue}
        isVertical
        ButtonComponent={Button}
      />,
    );
    const ContentItemDuoCommonVertical = screen.getByText(
      ContentItemDuoCommonLabel,
    );
    expect(ContentItemDuoCommonVertical.parentElement).toHaveClass(
      "af-content-item-duo--vertical",
    );
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <ContentItemDuoCommon
        label={ContentItemDuoCommonLabel}
        value={ContentItemDuoCommonValue}
        ButtonComponent={Button}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
