import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import {
  ButtonCommon as Button,
  buttonVariants,
  type ButtonVariants,
} from "../ButtonCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";

describe("Button component", () => {
  it.each(Object.keys(buttonVariants))(
    "should render correctly with variant %s",
    (variant) => {
      render(
        <Button variant={variant as ButtonVariants} SpinnerComponent={Spinner}>
          Test
        </Button>,
      );
      const button = screen.getByRole("button", { name: /test/i });
      expect(button).toHaveClass(`af-btn-client--${variant}`);
    },
  );

  it("should render with left icon", () => {
    render(
      <Button
        variant="primary"
        iconLeft={<span>Left Icon</span>}
        SpinnerComponent={Spinner}
      >
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toContainHTML("<span>Left Icon</span>");
  });

  it("should render with right icon", () => {
    render(
      <Button
        variant="primary"
        iconRight={<span>Right Icon</span>}
        SpinnerComponent={Spinner}
      >
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toContainHTML("<span>Right Icon</span>");
  });

  it("should apply additional class names", () => {
    render(
      <Button
        variant="primary"
        className="extra-class"
        SpinnerComponent={Spinner}
      >
        Test
      </Button>,
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveClass("extra-class");
  });

  it("should pass additional props to the button element", () => {
    render(
      <Button
        variant="primary"
        data-testid="custom-button"
        SpinnerComponent={Spinner}
      >
        Test
      </Button>,
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });

  it("Should disable the button when disabled", () => {
    render(
      <Button disabled SpinnerComponent={Spinner}>
        Disabled
      </Button>,
    );
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  it("Should disable the button and show loader when loading", () => {
    render(
      <Button loading SpinnerComponent={Spinner}>
        Loading
      </Button>,
    );
    const button = screen.getByText("Loading");
    expect(button).toBeDisabled();
    expect(screen.getByLabelText("Chargement en cours")).toBeInTheDocument();
  });

  it("Should calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} SpinnerComponent={Spinner}>
        Click me
      </Button>,
    );
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
