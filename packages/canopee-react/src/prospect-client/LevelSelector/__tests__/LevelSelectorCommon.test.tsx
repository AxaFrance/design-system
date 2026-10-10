import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { LevelSelectorCommon } from "../LevelSelectorCommon";
import { LevelSelector as LevelSelectorApollo } from "../LevelSelectorApollo";
import { LevelSelector as LevelSelectorLF } from "../LevelSelectorLF";
import { ClickIcon } from "../../ClickIcon/ClickIconCommon";
import { CardCommon } from "../../Card/CardCommon";

const defaultProps = {
  title: "Level Selector title",
  stepsCount: 3 as const,
  ClickIconComponent: ClickIcon,
  CardComponent: CardCommon,
};

describe("<LevelSelectorCommon />", () => {
  describe("render", () => {
    it("renders with minimal props", () => {
      render(<LevelSelectorCommon {...defaultProps} />);

      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Diminuer le niveau" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Augmenter le niveau" }),
      ).toBeInTheDocument();
      expect(screen.getAllByRole("radio")).toHaveLength(3);
    });

    it("renders with title and description", () => {
      const props = {
        ...defaultProps,
        title: "Test Title",
        description: "Test Description",
      };

      render(<LevelSelectorCommon {...props} />);

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it("renders correct number of radio buttons based on steps", () => {
      render(<LevelSelectorCommon {...defaultProps} stepsCount={2} />);

      expect(screen.getAllByRole("radio")).toHaveLength(2);
    });

    it("shows correct selected state based on value", () => {
      render(<LevelSelectorCommon {...defaultProps} value={3} />);

      const radios = screen.getAllByRole("radio");
      expect(radios[2]).toBeChecked(); // value 3 = index 2
      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).not.toBeChecked();
    });

    it("applies selected class to labels based on value", () => {
      const { container } = render(
        <LevelSelectorCommon {...defaultProps} value={2} />,
      );

      const labels = container.querySelectorAll(".af-level-selector__radio");
      expect(labels[0]).toHaveClass("af-level-selector__active");
      expect(labels[1]).toHaveClass("af-level-selector__active");
      expect(labels[2]).not.toHaveClass("af-level-selector__active");
    });
  });

  describe("interactions", () => {
    it("calls onChange when clicking increase button", async () => {
      const onChange = vi.fn();
      render(
        <LevelSelectorCommon {...defaultProps} value={2} onChange={onChange} />,
      );

      await userEvent.click(
        screen.getByRole("button", { name: "Augmenter le niveau" }),
      );

      expect(onChange).toHaveBeenCalledWith(3);
    });

    it("calls onChange when clicking decrease button", async () => {
      const onChange = vi.fn();
      render(
        <LevelSelectorCommon {...defaultProps} value={2} onChange={onChange} />,
      );

      await userEvent.click(
        screen.getByRole("button", { name: "Diminuer le niveau" }),
      );

      expect(onChange).toHaveBeenCalledWith(1);
    });

    it("calls onChange when selecting a radio button", async () => {
      const onChange = vi.fn();
      render(
        <LevelSelectorCommon {...defaultProps} value={2} onChange={onChange} />,
      );

      const radios = screen.getAllByRole("radio");
      await userEvent.click(radios[2]); // Select step 3

      expect(onChange).toHaveBeenCalledWith(3);
    });
  });

  describe("disabled states", () => {
    it("disables decrease button when value is 0", () => {
      render(<LevelSelectorCommon {...defaultProps} value={0} />);

      expect(
        screen.getByRole("button", { name: "Diminuer le niveau" }),
      ).toBeDisabled();
    });

    it("disables increase button when value equals steps", () => {
      render(
        <LevelSelectorCommon {...defaultProps} value={3} stepsCount={3} />,
      );

      expect(screen.getByLabelText("Augmenter le niveau")).toBeDisabled();
    });

    it("enables both buttons when value is between 1 and steps-1", () => {
      render(
        <LevelSelectorCommon {...defaultProps} value={2} stepsCount={3} />,
      );

      expect(
        screen.getByRole("button", { name: "Diminuer le niveau" }),
      ).not.toBeDisabled();
      expect(
        screen.getByRole("button", { name: "Augmenter le niveau" }),
      ).not.toBeDisabled();
    });
  });

  describe("accessibility", () => {
    it("has proper ARIA attributes", () => {
      const props = {
        ...defaultProps,
        title: "Level Selector",
        description: "Select your level",
        value: 2,
      };

      render(<LevelSelectorCommon {...props} />);

      const element = screen.getByText(props.description);
      const radios = screen.getAllByRole("radio");
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("aria-describedby", element.id);
      });

      expect(screen.getByText("Select your level")).toHaveAttribute(
        "aria-live",
        "polite",
      );
    });
  });
});

describe.each([
  ["Apollo", LevelSelectorApollo],
  ["LF", LevelSelectorLF],
])("<LevelSelector /> %s radio names", (_, LevelSelector) => {
  it("should name each radio on the input itself", async () => {
    const { container } = render(
      <LevelSelector title="Niveau de garantie" stepsCount={3} />,
    );

    screen.getAllByRole("radio").forEach((radio, index) => {
      expect(radio).toHaveAttribute("aria-label", `Niveau ${index + 1}`);
      expect(radio).toHaveAccessibleName(`Niveau ${index + 1}`);
      expect(radio.closest("label")).not.toHaveAttribute("aria-label");
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should not reference a missing description", () => {
    render(<LevelSelector title="Niveau de garantie" />);

    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).not.toHaveAttribute("aria-describedby");
    });
  });

  it("should describe each radio with the description", () => {
    render(
      <LevelSelector
        title="Niveau de garantie"
        description="Niveau conseillé"
      />,
    );

    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toHaveAccessibleDescription("Niveau conseillé");
    });
  });
});
