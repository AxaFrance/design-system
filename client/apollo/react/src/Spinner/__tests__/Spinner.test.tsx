import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner, spinnerVariants } from "../SpinnerApollo";

describe("Spinner Component", () => {
  it("should render the Spinner component", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("should have a default variant if none is provided", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveClass("af-spinner--blue");
  });

  it.each(Object.values(spinnerVariants))(
    "should apply the correct variant class for %s",
    (variant) => {
      render(<Spinner variant={variant} />);
      const spinnerElement = screen.getByRole("alert");
      expect(spinnerElement).toHaveClass(`af-spinner--${variant}`);
    },
  );
});
