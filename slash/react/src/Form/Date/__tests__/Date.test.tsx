import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Date as DateComponent } from "../Date";

describe("Date", () => {
  const fakeDate = new Date("2025-03-28");

  it("should have value and default class", () => {
    // Act
    render(<DateComponent value={fakeDate} data-testid="myElement" />);

    // Assert
    const dateContent = screen.getByTestId("myElement");
    expect(dateContent).toHaveValue("2025-03-28");
    expect(dateContent).toHaveClass("af-form__input-date");
  });

  it("should have custom class", () => {
    // Act
    render(
      <DateComponent
        value={fakeDate}
        data-testid="myElement"
        className="custom-class"
      />,
    );

    // Assert
    expect(screen.getByTestId("myElement")).toHaveClass("custom-class", {
      exact: true,
    });
  });

  it("should have custom class and modifier", () => {
    // Act
    render(
      <DateComponent
        value={fakeDate}
        data-testid="myElement"
        classModifier="modifier"
        className="custom-class"
      />,
    );

    // Assert
    expect(screen.getByTestId("myElement")).toHaveClass(
      "custom-class custom-class--modifier",
      {
        exact: true,
      },
    );
  });

  it("should be required", () => {
    // Act
    render(<DateComponent value={fakeDate} data-testid="myElement" required />);

    // Assert
    expect(screen.getByTestId("myElement")).toBeRequired();
  });

  it("should be required by classModifier", () => {
    // Act
    render(
      <DateComponent
        value={fakeDate}
        data-testid="myElement"
        classModifier="required"
      />,
    );

    // Assert
    expect(screen.getByTestId("myElement")).toBeRequired();
  });

  it("shouldn't have an accesibility violation <Date />", async () => {
    // Act
    const { container } = render(
      <DateComponent
        aria-label="textLabel"
        value={fakeDate}
        data-testid="myElement"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
