import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Number } from "../Number";

describe("Number", () => {
  it("should have value and default class", () => {
    // Act
    render(<Number value="123" />);

    // Assert
    const numberContent = screen.getByRole("spinbutton");
    expect(numberContent).toHaveValue(123);
    expect(numberContent).toHaveClass("af-form__input-text");
  });

  it("should have custom class", () => {
    // Act
    render(<Number value="999" className="custom-class" />);

    // Assert
    expect(screen.getByRole("spinbutton")).toHaveClass(
      "af-form__input-text custom-class",
      {
        exact: true,
      },
    );
  });

  it("should support a custom class", () => {
    // Act
    render(<Number value="456" className="custom-class" />);

    // Assert
    expect(screen.getByRole("spinbutton")).toHaveClass(
      "af-form__input-text custom-class",
      {
        exact: true,
      },
    );
  });

  it("should be required", () => {
    // Act
    render(<Number value="123" required />);

    // Assert
    expect(screen.getByRole("spinbutton")).toBeRequired();
  });

  it("should be required", () => {
    // Act
    render(<Number value="123" required />);

    // Assert
    expect(screen.getByRole("spinbutton")).toBeRequired();
  });

  it("shouldn't have an accesibility violation <Number />", async () => {
    // Act
    const { container } = render(
      <Number value="999" aria-label="numberInput" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
