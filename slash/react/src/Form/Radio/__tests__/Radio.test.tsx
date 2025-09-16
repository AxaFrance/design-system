import { render, screen } from "@testing-library/react";
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
    render(<Radio mode="card" options={options} name="myRadio" />);

    const radioCards = screen.getAllByRole("radio");
    expect(radioCards).toHaveLength(3);
  });

  it("should have default class on each card", () => {
    // Act
    render(<Radio mode="card" options={options} />);

    // Assert
    options.forEach((option) => {
      expect(screen.getByText(option.label as string)).toHaveClass("af-card");
    });
  });

  it("should have modifier class on horizontal orentation", () => {
    // Act
    render(<Radio mode="card" orientation="horizontal" options={options} />);

    // Assert
    expect(
      document.querySelector(".af-form__radio-card-group--horizontal"),
    ).toBeInTheDocument();
  });

  it("should have custom class", () => {
    // Act
    render(<Radio mode="card" options={options} className="custom-class" />);

    // Assert
    expect(document.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    // Act
    const { container } = render(<Radio mode="card" options={options} />);

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
