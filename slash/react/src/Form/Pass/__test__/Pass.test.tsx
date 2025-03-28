import { render, screen } from "@testing-library/react";
import { Pass } from "../Pass";

describe("Pass", () => {
  it("should have value and default class", () => {
    // Act
    render(<Pass onToggleType={() => ""} value="secret" />);

    // Assert
    const passwordContent = screen.getByRole("password");
    expect(passwordContent).toHaveValue("secret");
    expect(passwordContent).toHaveClass("af-form__input-text");
  });

  it("should have custom class", () => {
    // Act
    render(
      <Pass onToggleType={() => ""} value="secret" className="custom-class" />,
    );

    // Assert
    expect(screen.getByRole("password").parentElement!).toHaveClass(
      "custom-class",
      {
        exact: true,
      },
    );
  });

  it("should have custom class and modifier", () => {
    // Act
    render(
      <Pass
        value="secret"
        className="custom-class"
        classModifier="modifier"
        onToggleType={() => ""}
      />,
    );

    // Assert
    expect(screen.getByRole("password").parentElement!).toHaveClass(
      "custom-class custom-class--modifier",
      {
        exact: true,
      },
    );
  });

  it("should be required", () => {
    // Act
    render(
      <Pass onToggleType={() => ""} value="secret" classModifier="required" />,
    );

    // Assert
    expect(screen.getByRole("password")).toBeRequired();
  });

  it("should be required by classModifier", () => {
    // Act
    render(
      <Pass onToggleType={() => ""} value="secret" classModifier="required" />,
    );

    // Assert
    expect(screen.getByRole("password")).toBeRequired();
  });
});
