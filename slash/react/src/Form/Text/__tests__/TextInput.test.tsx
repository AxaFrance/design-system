import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TextInput } from "../TextInput";

describe("TextInput", () => {
  it("should have label, value and default class", () => {
    // Act
    render(<TextInput label="TextInput label" value="Hello World" />);

    // Assert
    expect(screen.getByText("TextInput label")).toHaveClass(
      "af-form__group-label",
    );
    const labelTextInput = screen.getByLabelText("TextInput label");
    expect(labelTextInput).toHaveValue("Hello World");
    expect(labelTextInput).toHaveClass("af-form__input-text");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        helpMessage="Hello help Message"
        message="Hello message"
        value="Hello World"
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
      <TextInput
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
      <TextInput
        label="TextInput label"
        classNameContainerLabel="labelClassName"
        classNameContainerInput="InputClassName"
        value="Hello World"
      />,
    );

    // Assert
    expect(screen.getByText("TextInput label").parentElement).toHaveClass(
      "labelClassName",
    );
    expect(
      screen.getByLabelText("TextInput label").parentElement?.parentElement,
    ).toHaveClass("InputClassName");
  });

  it("should render element right to input", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        rightElement="Content"
      />,
    );

    // Assert
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <TextInput/>", async () => {
    // Act
    const { container } = render(
      <TextInput label="TextInput label" value="Hello World" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
