import { render, screen } from "@testing-library/react";
import { Loader } from "../Loader";

describe("Loader component", () => {
  it("should render with inline variant", () => {
    render(<Loader variant="inline" text="Recherche en cours" />);

    const loaderElement = screen.getByRole("alert");

    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveTextContent("Recherche en cours");
    expect(loaderElement).toHaveAttribute("aria-busy", "true");
    expect(loaderElement).toHaveAttribute("aria-live", "assertive");
    expect(loaderElement).toHaveClass("af-loader");
  });

  it("should render with a fullScreen variant", () => {
    render(<Loader variant="fullScreen" text="Recherche en cours" />);

    const loaderElement = screen.getByRole("alert");
    expect(loaderElement).toHaveClass("af-loader--fullScreen");
  });

  it("should render with content variant", () => {
    render(<Loader variant="content" text="Recherche en cours" />);

    const loaderElement = screen.getByRole("alert");
    expect(loaderElement).toHaveClass("af-loader--content");
  });

  it("should render with custom className", () => {
    render(<Loader text="Recherche en cours" className="custom-class" />);

    const loaderElement = screen.getByRole("alert");
    expect(loaderElement).toHaveClass("custom-class");
  });
});
