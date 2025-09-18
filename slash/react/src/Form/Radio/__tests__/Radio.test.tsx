import { render, screen, within } from "@testing-library/react";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { axe } from "jest-axe";
import { Radio } from "../Radio";
import { Option } from "../../core";

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

describe("Radio mode card", () => {
  it("should render 3 radio cards", () => {
    render(
      <Radio mode="cardRadio" options={options}>
        Test
      </Radio>,
    );

    const radioGroup = screen.getByRole("radiogroup");
    expect(radioGroup).toBeInTheDocument();
    expect(radioGroup).toHaveClass("af-form__radio-card-group");

    const radioCards = within(radioGroup).getAllByRole("radio");
    expect(radioCards).toHaveLength(3);
  });

  it("should have default class on each card", () => {
    // Act
    render(<Radio mode="cardRadio" options={options} />);

    // Assert
    options.forEach((option) => {
      expect(screen.getByText(option.label as string)).toHaveClass("af-card");
    });
  });

  it("should have modifier class on horizontal orentation", () => {
    // Act
    render(
      <Radio mode="cardRadio" orientation="horizontal" options={options} />,
    );

    // Assert
    expect(screen.getByRole("radiogroup")).toHaveClass(
      "af-form__radio-card-group--horizontal",
    );
  });

  it("should have custom class", () => {
    // Act
    render(
      <Radio mode="cardRadio" options={options} className="custom-class" />,
    );

    // Assert
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
  });

  it("shouldn't have an accessibility violation", async () => {
    // Act
    const { container } = render(<Radio mode="cardRadio" options={options} />);

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
