import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ButtonCommon, type ButtonProps } from "../../../Button/ButtonCommon";
import { Spinner } from "../../../Spinner/SpinnerCommon";
import { ItemLabelCommon, type ItemLabelProps } from "../ItemLabelCommon";

const ButtonMock = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);

// eslint-disable-next-line react/no-multi-comp
const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={ButtonMock} />
);

describe("<ItemLabelCommon/>", () => {
  it("should render the label", () => {
    render(<ItemLabel>Label Text</ItemLabel>);

    const labelElement = screen.getByText("Label Text");

    expect(labelElement).toBeInTheDocument();
  });

  it("should render the description with proper ARIA association", () => {
    render(<ItemLabel description="Description Text">Label Text</ItemLabel>);

    const descriptionElement = screen.getByText("Description Text");
    expect(descriptionElement).toBeInTheDocument();

    const labelElement = screen.getByText("Label Text");
    expect(labelElement).toHaveAccessibleDescription("Description Text");
  });

  it("should render the side button", () => {
    render(<ItemLabel sideButtonLabel="Side Button">Label Text</ItemLabel>);

    const sideButton = screen.getByRole("button", { name: "Side Button" });

    expect(sideButton).toBeInTheDocument();
  });

  it("should render the more button", () => {
    render(<ItemLabel moreButtonLabel="More Button">Label Text</ItemLabel>);

    const moreButton = screen.getByRole("button", { name: "More Button" });

    expect(moreButton).toBeInTheDocument();
  });

  it("should render the required asterisk when required is true", () => {
    render(<ItemLabel required>Label Text</ItemLabel>);

    const labelElement = screen.getByText("Label Text");

    expect(labelElement).toHaveTextContent("*");
  });

  it("should call onSideButtonClick when side button is clicked", async () => {
    const user = userEvent.setup();
    const handleClickSideButton = vi.fn();
    render(
      <ItemLabel
        sideButtonLabel="Side Button"
        onSideButtonClick={handleClickSideButton}
      >
        Label Text
      </ItemLabel>,
    );

    const sideButton = screen.getByRole("button", { name: "Side Button" });
    await user.click(sideButton);

    expect(handleClickSideButton).toHaveBeenCalledTimes(1);
  });

  it("should call onInfoButtonClick when info button is clicked", async () => {
    const user = userEvent.setup();
    const handleClickMoreButton = vi.fn();
    render(
      <ItemLabel
        moreButtonLabel="More Button"
        onMoreButtonClick={handleClickMoreButton}
      >
        Label Text
      </ItemLabel>,
    );

    const moreButton = screen.getByRole("button", { name: "More Button" });
    await user.click(moreButton);

    expect(handleClickMoreButton).toHaveBeenCalledTimes(1);
  });

  it("should not render when no content label is provided", () => {
    const { container } = render(<ItemLabel />);

    expect(container.firstChild).toBeNull();
  });

  describe("Deprecated props support", () => {
    it("should render children as the label content", () => {
      render(<ItemLabel>Label</ItemLabel>);

      const labelElement = screen.getByText("Label");
      expect(labelElement).toBeInTheDocument();
    });

    it("should support deprecated buttonLabel and onButtonClick props", async () => {
      const user = userEvent.setup();
      const handleClickButton = vi.fn();
      render(
        <ItemLabel
          moreButtonLabel="Button"
          onMoreButtonClick={handleClickButton}
        >
          Label Text
        </ItemLabel>,
      );

      const button = screen.getByRole("button", {
        name: "Button",
      });
      expect(button).toBeInTheDocument();

      await user.click(button);
      expect(handleClickButton).toHaveBeenCalledTimes(1);
    });
  });
});
