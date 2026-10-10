import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { MessageTypes, type Option } from "../../core";
import { RadioInput } from "../RadioInput";

const languageOptions = [
  { label: "French", value: "french" },
  { label: "English", value: "english" },
  {
    label: "Spanish",
    value: "spanish",
    action: <span>Modifier les informations</span>,
  },
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
      const radioGroupWrapper = radioCards[0].closest(
        ".af-form__radio-card-group",
      );
      expect(radioGroupWrapper).toBeInTheDocument();
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
      const radioGroupWrapper = radioCards[0].closest(
        ".af-form__radio-card-group--horizontal",
      );
      expect(radioGroupWrapper).toBeInTheDocument();
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

    it("should have action element", () => {
      // Act
      render(
        <RadioInput
          mode="cardRadio"
          options={languageOptions}
          label="Radio card"
        />,
      );

      // Assert
      expect(screen.getByText("Modifier les informations")).toBeInTheDocument();
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

  describe("group label and error message", () => {
    const civilityOptions = [
      { label: "Madame", value: "mme" },
      { label: "Monsieur", value: "m" },
    ];

    it("labels the radiogroup without a for attribute on its div", () => {
      const { container } = render(
        <RadioInput label="Civilité" name="civ" options={civilityOptions} />,
      );

      expect(container.querySelector("div[for]")).toBeNull();
      expect(
        screen.getByRole("radiogroup", { name: "Civilité" }),
      ).toBeInTheDocument();
    });

    it.each(["default", "cardRadio"] as const)(
      "describes each radio by the error message in %s mode",
      (mode) => {
        const { container } = render(
          <RadioInput
            label="Civilité"
            name={`civ-${mode}`}
            mode={mode}
            message="Choisissez une civilité"
            forceDisplayMessage
            messageType={MessageTypes.error}
            options={civilityOptions}
          />,
        );

        const radios = screen.getAllByRole("radio");
        expect(radios).toHaveLength(2);
        radios.forEach((radio) => {
          expect(radio).toHaveAccessibleDescription("Choisissez une civilité");
          expect(radio).not.toHaveAttribute("errorid");
        });
        expect(container.querySelector("[errorid], [ariainvalid]")).toBeNull();
      },
    );

    it("keeps the radiogroup invalid and accessible in error", async () => {
      const { container } = render(
        <RadioInput
          label="Civilité"
          name="civ-axe"
          message="Choisissez une civilité"
          forceDisplayMessage
          messageType={MessageTypes.error}
          options={civilityOptions}
        />,
      );

      expect(screen.getByRole("radiogroup")).toHaveAttribute(
        "aria-invalid",
        "true",
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
