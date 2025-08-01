import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { Pass } from "../Pass";

describe("Pass", () => {
  it("should have value and default class", () => {
    // Act
    render(<Pass onToggleType={() => {}} value="secret" />);

    // Assert
    const passwordInput = screen.getByLabelText("password");
    expect(passwordInput).toHaveValue("secret");
    expect(passwordInput).toHaveClass("af-form__input-text");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should have custom class", () => {
    // Act
    render(
      <Pass onToggleType={() => {}} value="secret" className="custom-class" />,
    );

    // Assert
    expect(screen.getByLabelText("password").parentElement).toHaveClass(
      "custom-class",
    );
  });

  it("should have custom class and modifier", () => {
    // Act
    render(
      <Pass
        onToggleType={() => {}}
        value="secret"
        className="custom-class"
        classModifier="modifier"
      />,
    );

    // Assert
    expect(screen.getByLabelText("password").parentElement).toHaveClass(
      "custom-class custom-class--modifier",
    );
  });

  it("should be required when classModifier includes required", () => {
    // Act
    render(
      <Pass onToggleType={() => {}} value="secret" classModifier="required" />,
    );

    // Assert
    expect(screen.getByLabelText("password")).toBeRequired();
  });

  it("should toggle input type and icon class when button is clicked", () => {
    // Act
    render(<Pass onToggleType={() => {}} value="secret" />);

    // Assert initial state
    const passwordInput = screen.getByLabelText("password");
    const toggleButton = screen.getByLabelText("show password");
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(toggleButton.querySelector("i")).toHaveClass("glyphicon-eye-open");

    // Act: Click to toggle to text
    fireEvent.click(toggleButton);

    // Assert: Type and icon updated
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(toggleButton.querySelector("i")).toHaveClass("glyphicon-eye-close");

    // Act: Click to toggle back to password
    fireEvent.click(toggleButton);

    // Assert: Type and icon reverted
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(toggleButton.querySelector("i")).toHaveClass("glyphicon-eye-open");
  });

  it("should use fallback aria-label when not provided", () => {
    // Act
    render(<Pass onToggleType={() => {}} value="secret" />);

    // Assert
    const passwordInput = screen.getByLabelText("password");
    expect(passwordInput).toHaveAttribute("aria-label", "password");
  });

  it("should render pass strength div and button with correct attributes", () => {
    // Act
    render(<Pass onToggleType={() => {}} value="secret" />);

    // Assert
    const strengthDiv = screen
      .getByLabelText("password")
      .parentElement?.querySelector(".af-form__pass-strength");
    expect(strengthDiv).toBeInTheDocument();
    expect(strengthDiv).toHaveClass("af-form__pass-strength");

    const toggleButton = screen.getByLabelText("show password");
    expect(toggleButton).toHaveAttribute("type", "button");
    expect(toggleButton).toHaveClass("af-form__pass-btn");
    expect(toggleButton).toHaveAttribute("aria-label", "show password");
  });

  it("should have no accessibility violations", async () => {
    // Act
    const { container } = render(
      <Pass
        onToggleType={() => {}}
        value="secret"
        aria-label="password"
        classModifier="required"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
