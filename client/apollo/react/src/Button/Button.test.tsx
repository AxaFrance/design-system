import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button, buttonVariants, type ButtonVariants } from ".";

describe("Button component", () => {
  it.each(Object.keys(buttonVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(<Button variant={variant as ButtonVariants}>Test</Button>);
      const button = screen.getByRole("button", { name: /test/i });
      expect(button).toHaveClass(`af-btn-client--${variant}`);
    },
  );

  it("should render with left icon", () => {
    render(
      <Button variant="primary" iconLeft={<span>Left Icon</span>}>
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toContainHTML("<span>Left Icon</span>");
  });

  it("should render with right icon", () => {
    render(
      <Button variant="primary" iconRight={<span>Right Icon</span>}>
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toContainHTML("<span>Right Icon</span>");
  });

  it("should apply additional class names", () => {
    render(
      <Button variant="primary" className="extra-class">
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveClass("extra-class");
  });

  it("should pass additional props to the button element", () => {
    render(
      <Button variant="primary" data-testid="custom-button">
        Test
      </Button>,
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });
});
