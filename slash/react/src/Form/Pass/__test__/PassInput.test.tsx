import { render, screen } from "@testing-library/react";
import { PassInput } from "../PassInput";

describe("PassInput", () => {
  it("should have label, value and default class", () => {
    // Act
    render(<PassInput label="PassInput label" value="secret" />);

    // Assert
    expect(screen.getByText("PassInput label")).toHaveClass(
      "af-form__group-label",
    );
    const labelPassInput = screen.getByLabelText("PassInput label");
    expect(labelPassInput).toHaveValue("secret");
    expect(labelPassInput).toHaveClass("af-form__input-text");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <PassInput
        label="PassInput label"
        helpMessage="Hello help Message"
        message="Hello message"
        value="secret"
        forceDisplayMessage
      />,
    );

    // Assert
    expect(screen.queryByText("Hello help Message")).not.toBeInTheDocument();
    expect(screen.getByText("Hello message")).toBeInTheDocument();
  });

  it("should print help message", () => {
    // Act
    render(
      <PassInput
        label="TextInput label"
        helpMessage="Hello help Message"
        value="Hello World"
      />,
    );

    // Assert
    expect(screen.getByText("Hello help Message")).toBeInTheDocument();
  });

  it("should change the input container classname", () => {
    // Act
    render(
      <PassInput
        label="PassInput label"
        classNameContainerLabel="labelClassName"
        classNameContainerInput="InputClassName"
        value="Hello World"
      />,
    );

    // Assert
    expect(screen.getByText("PassInput label").parentElement).toHaveClass(
      "labelClassName",
    );
  });
});
