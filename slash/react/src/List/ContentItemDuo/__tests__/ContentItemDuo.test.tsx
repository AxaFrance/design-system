import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContentItemDuo } from "../ContentItemDuo";

describe("ContentItemDuo", () => {
  const label = "Sample Label";
  const value = "Sample Value";

  it("should render label and value correctly", () => {
    render(<ContentItemDuo label={label} value={value} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it("should render button with correct text and call onClick handler", async () => {
    const buttonText = "button";
    const onButtonClick = vi.fn();

    render(
      <ContentItemDuo
        label={label}
        value={value}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
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
    render(<ContentItemDuo label={label} value={value} isVertical />);

    expect(screen.getByText(label).parentElement).toHaveClass(
      "af-content-item-duo--vertical",
    );
  });

  it("should render done icon when isShowingDoneIcon prop is true", () => {
    const { container } = render(
      <ContentItemDuo label={label} value={value} isShowingDoneIcon />,
    );

    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement?.parentElement).toHaveClass(
      "af-content-item-duo__icon--done",
    );
  });

  it("should render close icon when isShowingCloseIcon prop is true", () => {
    const { container } = render(
      <ContentItemDuo label={label} value={value} isShowingCloseIcon />,
    );

    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement?.parentElement).toHaveClass(
      "af-content-item-duo__icon--close",
    );
  });
});
