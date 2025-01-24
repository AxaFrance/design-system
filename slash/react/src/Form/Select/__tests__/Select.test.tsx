import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Select } from "../Select";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

describe("Select", () => {
  it("should have option and default class", () => {
    // Act
    render(<Select mode="default" options={options} />);

    // Asser
    const selectInput = screen.getByRole("combobox");
    const selectDefault = screen.getByRole("option", { name: /- select -/i });
    const selectFun = screen.getByRole("option", { name: /for fun/i });
    const selectWork = screen.getByRole("option", { name: /for work/i });
    const selectDrink = screen.getByRole("option", { name: /for drink/i });

    expect(selectInput).toHaveClass("af-form__input-select");
    expect(selectDefault).toBeInTheDocument();
    expect(selectFun).toBeInTheDocument();
    expect(selectWork).toBeInTheDocument();
    expect(selectDrink).toBeInTheDocument();
  });

  it("should have mode base", () => {
    // Act
    render(<Select mode="base" options={options} />);

    // Assert
    const combobox = screen.getByRole("combobox");
    const selectOption = screen.queryByRole("option", { name: /- select -/i });
    const selectFun = screen.getByRole("option", { name: /for fun/i });
    const selectWork = screen.getByRole("option", { name: /for work/i });
    const selectDrink = screen.getByRole("option", { name: /for drink/i });

    expect(combobox).toBeInTheDocument();
    expect(selectOption).not.toBeInTheDocument();
    expect(selectFun).toBeInTheDocument();
    expect(selectWork).toBeInTheDocument();
    expect(selectDrink).toBeInTheDocument();
  });

  it("should mode base to be required", () => {
    // Act
    render(<Select mode="base" required options={options} />);

    // Assert
    const selectBaseInput = screen.getByRole("combobox");
    expect(selectBaseInput).toBeRequired();
  });

  it("should mode base to be required with classModifier", () => {
    // Act
    render(<Select mode="base" classModifier="required" options={options} />);

    // Assert
    const selectBaseInput = screen.getByRole("combobox");
    expect(selectBaseInput).toBeRequired();
  });

  it("should mode default have default value", () => {
    // Act
    render(<Select mode="default" defaultValue="fun" options={options} />);

    // Assert
    const selectBaseInput = screen.getByRole("combobox");
    expect(selectBaseInput).toHaveValue("fun");
  });

  it("should mode default have onChange attribut", async () => {
    const onChangeFn = vi.fn();

    // Act
    render(
      <Select
        mode="default"
        onChange={(e) => onChangeFn(e.target.value)}
        defaultValue="fun"
        options={options}
      />,
    );

    // Assert
    await userEvent.selectOptions(screen.getByRole("combobox"), "drink");
    expect(onChangeFn).toHaveBeenCalledWith("drink");
  });

  it("shouldn't have an accessibility violation <Select />", async () => {
    // Act
    const { container } = render(
      <Select
        mode="default"
        aria-label="select-default"
        onChange={() => {}}
        defaultValue="fun"
        options={options}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
