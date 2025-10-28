import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Spinner } from "../../../Spinner/SpinnerCommon";
import { ItemLabelCommon, type ItemLabelProps } from "../ItemLabelCommon";
import { ButtonCommon, type ButtonProps } from "../../../Button/ButtonCommon";

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
    it("should support deprecated label prop", () => {
      render(<ItemLabel label="Deprecated Label" />);

      const labelElement = screen.getByText("Deprecated Label");
      expect(labelElement).toBeInTheDocument();
    });

    it("should prefer children over deprecated label prop", () => {
      render(<ItemLabel label="Deprecated Label">Children Label</ItemLabel>);

      const childrenLabel = screen.getByText("Children Label");
      const deprecatedLabel = screen.queryByText("Deprecated Label");

      expect(childrenLabel).toBeInTheDocument();
      expect(deprecatedLabel).not.toBeInTheDocument();
    });

    it("should support deprecated inputId prop", () => {
      render(<ItemLabel inputId="deprecated-input-id">Label Text</ItemLabel>);

      const labelElement = screen.getByText("Label Text");
      expect(labelElement).toHaveAttribute("for", "deprecated-input-id");
    });

    it("should prefer htmlFor over deprecated inputId prop", () => {
      render(
        <ItemLabel inputId="deprecated-input-id" htmlFor="preferred-id">
          Label Text
        </ItemLabel>,
      );

      const labelElement = screen.getByText("Label Text");
      expect(labelElement).toHaveAttribute("for", "preferred-id");
    });

    it("should support deprecated buttonLabel and onButtonClick props", async () => {
      const user = userEvent.setup();
      const handleClickDeprecatedButton = vi.fn();
      render(
        <ItemLabel
          buttonLabel="Deprecated Button"
          onButtonClick={handleClickDeprecatedButton}
        >
          Label Text
        </ItemLabel>,
      );

      const deprecatedButton = screen.getByRole("button", {
        name: "Deprecated Button",
      });
      expect(deprecatedButton).toBeInTheDocument();

      await user.click(deprecatedButton);
      expect(handleClickDeprecatedButton).toHaveBeenCalledTimes(1);
    });

    it("should prefer moreButton over deprecated buttonLabel prop", async () => {
      const user = userEvent.setup();
      const handleClickInfoButton = vi.fn();
      const handleClickDeprecatedButton = vi.fn();
      render(
        <ItemLabel
          moreButtonLabel="More Button"
          onMoreButtonClick={handleClickInfoButton}
          buttonLabel="Deprecated Button"
          onButtonClick={handleClickDeprecatedButton}
        >
          Label Text
        </ItemLabel>,
      );

      const moreButton = screen.getByRole("button", { name: "More Button" });
      const deprecatedButton = screen.queryByRole("button", {
        name: "Deprecated Button",
      });

      expect(moreButton).toBeInTheDocument();
      expect(deprecatedButton).not.toBeInTheDocument();

      await user.click(moreButton);
      expect(handleClickInfoButton).toHaveBeenCalledTimes(1);
      expect(handleClickDeprecatedButton).not.toHaveBeenCalled();
    });
  });
});
