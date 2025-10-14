import { render, screen, within } from "@testing-library/react";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { axe } from "jest-axe";
import { RadioInput } from "../RadioInput";
import { Option } from "../../core";

const languageOptions = [
  { label: "French", value: "french" },
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
];

describe("RadioInput", () => {
  it("should render element right to input", () => {
    // Act
    render(
      <RadioInput
        name="languages"
        mode="cardRadio"
        label="Languages"
        options={languageOptions}
      >
        Test
      </RadioInput>,
    );

    // Assert
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  describe("mode card", () => {
    const options: Option[] = [
      {
        label: "Option 1",
        value: "1",
        icon: villaIcon,
      },
      {
        label: "Option 2",
        value: "2",
        icon: villaIcon,
      },
      {
        label: "Option 3",
        value: "3",
        icon: villaIcon,
      },
    ];

    it("should render 3 radio cards", () => {
      render(
        <RadioInput mode="cardRadio" options={options} label="Radio card" />,
      );

      const radioGroup = screen.getByRole("radiogroup", { name: "Radio card" });

      const radioCards = within(radioGroup).getAllByRole("radio");
      const radioGroupWrapper = radioCards[0].closest("div");
      expect(radioGroupWrapper).toHaveClass("af-form__radio-card-group");
      expect(radioCards).toHaveLength(3);
    });

    it("should have default class on each card", () => {
      // Act
      render(
        <RadioInput mode="cardRadio" options={options} label="Radio card" />,
      );

      // Assert
      options.forEach((option) => {
        expect(screen.getByText(option.label as string)).toHaveClass("af-card");
      });
    });

    it("should have modifier class on horizontal orentation", () => {
      // Act
      render(
        <RadioInput
          mode="cardRadio"
          orientation="horizontal"
          options={options}
          label="Radio card"
        />,
      );

      // Assert
      const radioGroup = screen.getByRole("radiogroup", { name: "Radio card" });
      const radioCards = within(radioGroup).getAllByRole("radio");
      const radioGroupWrapper = radioCards[0].closest("div");
      expect(radioGroupWrapper).toHaveClass(
        "af-form__radio-card-group--horizontal",
      );
    });

    it("should have custom class", () => {
      // Act
      render(
        <RadioInput
          mode="cardRadio"
          options={options}
          className="custom-class"
          label="Radio card"
        />,
      );

      // Assert
      const radioGroup = screen.getByRole("radiogroup", { name: "Radio card" });
      expect(radioGroup).toHaveClass("custom-class");
    });

    it("should render children in radiogroup", () => {
      // Act
      render(
        <RadioInput
          mode="cardRadio"
          options={options}
          className="custom-class"
          label="Radio card"
        >
          <span>Child component</span>
        </RadioInput>,
      );

      // Assert
      const radioGroup = screen.getByRole("radiogroup", { name: "Radio card" });
      expect(
        within(radioGroup).getByText("Child component"),
      ).toBeInTheDocument();
    });

    it("shouldn't have an accessibility violation", async () => {
      // Act
      const { container } = render(
        <RadioInput mode="cardRadio" options={options} label="Radio card" />,
      );

      // Assert
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
