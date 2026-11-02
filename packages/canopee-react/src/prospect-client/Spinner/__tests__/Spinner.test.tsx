import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, it, expect } from "vitest";
import { Spinner, spinnerVariants } from "../SpinnerApollo";
import { Spinner as SpinnerLF } from "../SpinnerLF";

describe("Spinner Component", () => {
  it("should render the Spinner component", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("should have a default variant if none is provided", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("af-spinner--blue");
  });

  it.each(Object.values(spinnerVariants))(
    "should apply the correct variant class for %s",
    (variant) => {
      render(<Spinner variant={variant} />);
      const spinnerElement = screen.getByRole("status");
      expect(spinnerElement).toHaveClass(`af-spinner--${variant}`);
    },
  );
});

describe.each([
  ["Apollo", Spinner],
  ["LF", SpinnerLF],
])("Spinner %s accessibility", (_, Component) => {
  it("should be a polite status region with its text as content", () => {
    render(<Component />);
    const spinner = screen.getByRole("status");

    expect(spinner).toHaveAccessibleName("Chargement en cours");
    expect(spinner).toHaveTextContent("Chargement en cours");
    expect(spinner).not.toHaveAttribute("aria-live");
    expect(spinner).not.toHaveAttribute("aria-busy");
  });

  it("should use a custom text as name and content", () => {
    render(<Component text="Envoi du fichier" />);
    const spinner = screen.getByRole("status");

    expect(spinner).toHaveAccessibleName("Envoi du fichier");
    expect(spinner).toHaveTextContent("Envoi du fichier");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(<Component />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
