import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "../Spinner";

describe("Spinner component", () => {
  it("renders with the inline variant by default", () => {
    render(<Spinner text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("alert");

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveTextContent("Recherche en cours");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
    expect(spinnerElement).toHaveAttribute("aria-live", "assertive");
    expect(spinnerElement).toHaveClass("af-loader-spinner");
  });

  it("renders with the fullScreen variant", () => {
    render(<Spinner variant="fullScreen" text="Recherche en cours" />);

    expect(screen.getByRole("alert")).toHaveClass(
      "af-loader-spinner--fullScreen",
    );
  });

  it("renders with the content variant", () => {
    render(<Spinner variant="content" text="Recherche en cours" />);

    expect(screen.getByRole("alert")).toHaveClass("af-loader-spinner--content");
  });

  it("renders with a custom className", () => {
    render(<Spinner text="Recherche en cours" className="custom-class" />);

    expect(screen.getByRole("alert")).toHaveClass("custom-class");
  });
});
