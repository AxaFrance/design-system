import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { NumberInput } from "../NumberInput";

describe("NumberInput", () => {
  it("should have label, value and default class", () => {
    // Act
    render(<NumberInput label="NumberInput label" value="123" />);

    // Assert
    expect(screen.getByText("NumberInput label")).toHaveClass(
      "af-form__group-label",
    );
    const labelNumberInput = screen.getByLabelText("NumberInput label");
    expect(labelNumberInput).toHaveValue(123);
    expect(labelNumberInput).toHaveClass("af-form__input-text");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <NumberInput
        label="NumberInput label"
        helpMessage="Hello help Message"
        message="9999"
        value="Hello World"
        forceDisplayMessage
      />,
    );

    // Assert
    expect(screen.queryByText("Hello help Message")).not.toBeInTheDocument();
    expect(screen.getByText("9999")).toBeInTheDocument();
  });

  it("should print help message", () => {
    // Act
    render(
      <NumberInput
        label="NumberInput label"
        helpMessage="Hello help Message"
        value="9999"
      />,
    );

    // Assert
    expect(screen.getByText("Hello help Message")).toBeInTheDocument();
  });

  it("should change the input container classname", () => {
    // Act
    render(
      <NumberInput
        label="NumberInput label"
        classNameContainerLabel="labelClassName"
        classNameContainerInput="InputClassName"
        value="456"
      />,
    );

    // Assert
    expect(screen.getByText("NumberInput label").parentElement).toHaveClass(
      "labelClassName",
    );
    expect(
      screen.getByLabelText("NumberInput label").parentElement?.parentElement,
    ).toHaveClass("InputClassName");
  });

  it("shouldn't have an accessibility violation <NumberInput/>", async () => {
    // Act
    const { container } = render(
      <NumberInput label="NumberInput label" value="47965" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
