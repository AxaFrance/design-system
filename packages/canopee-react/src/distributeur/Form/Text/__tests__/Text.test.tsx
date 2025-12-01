import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Text } from "../Text";

describe("Text", () => {
  it("should have value and default class", () => {
    // Act
    render(<Text value="Hello World" />);

    // Assert
    const textBoxContent = screen.getByRole("textbox");
    expect(textBoxContent).toHaveValue("Hello World");
    expect(textBoxContent).toHaveClass("af-form__input-text");
  });

  it("should have custom class", () => {
    // Act
    render(<Text value="Hello World" className="custom-class" />);

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass("custom-class", {
      exact: true,
    });
  });

  it("should have custom class and modifier", () => {
    // Act
    render(
      <Text
        value="Hello World"
        className="custom-class"
        classModifier="modifier"
      />,
    );

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass(
      "custom-class custom-class--modifier",
      {
        exact: true,
      },
    );
  });

  it("should be required", () => {
    // Act
    render(<Text value="Hello World" required />);

    // Assert
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("should be required by classModifier", () => {
    // Act
    render(<Text value="Hello World" classModifier="required" />);

    // Assert
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("shouldn't have an accesibility violation <Text />", async () => {
    // Act
    const { container } = render(
      <Text aria-label="textLabel" value="Hello World" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
