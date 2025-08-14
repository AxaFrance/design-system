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
    expect(labelTextInput).toHaveClass("af-form__input-text"); // Adjusted to match rendered class
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
    ).toHaveClass("InputClassName"); // Adjusted to match DOM structure
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

  it("should apply correct classes for labelPosition='above'", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
        classModifier="required"
      />,
    );

    // Assert
    const formGroup =
      screen.getByText("TextInput label").parentElement?.parentElement;
    expect(formGroup).toHaveClass("af-form__group--label-above");
    expect(screen.getByText("TextInput label")).toHaveClass(
      "af-form__group-label",
    );
    expect(screen.getByLabelText("TextInput label").parentElement).toHaveClass(
      "af-form__text",
    );
    expect(screen.getByText("TextInput label")).toHaveClass(
      "af-form__group-label--required",
    );
  });

  it("should display label above input with labelPosition='above'", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
      />,
    );

    // Assert
    const label = screen.getByText("TextInput label");
    const input = screen.getByLabelText("TextInput label");
    expect(label.parentElement?.parentElement).toHaveClass(
      "af-form__group--label-above",
    );
    expect(input.parentElement).toHaveClass("af-form__text");
  });

  it("should display required class with labelPosition='above'", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
        classModifier="required"
      />,
    );

    // Assert
    const label = screen.getByText("TextInput label");
    expect(label).toHaveClass("af-form__group-label--required");
  });

  it("should render help message with labelPosition='above'", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
        helpMessage="Aide à la saisie"
      />,
    );

    // Assert
    expect(screen.getByText("Aide à la saisie")).toBeInTheDocument();
    expect(screen.getByText("Aide à la saisie")).toHaveClass("af-form__help");
  });

  it("should render right element with labelPosition='above'", () => {
    // Act
    render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
        rightElement="Content"
      />,
    );

    // Assert
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations with labelPosition='above'", async () => {
    // Act
    const { container } = render(
      <TextInput
        label="TextInput label"
        value="Hello World"
        labelPosition="above"
        classModifier="required"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
