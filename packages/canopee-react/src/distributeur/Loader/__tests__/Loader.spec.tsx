import { render, screen } from "@testing-library/react";
import { Loader } from "../Loader";

describe("Loader component", () => {
  it("should render inline spinner variant", () => {
    render(<Loader variant="inline" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveClass("af-spinner-loader");
    expect(spinnerElement).toHaveTextContent("Recherche en cours");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
  });

  it("should render fullscreen spinner variant", () => {
    render(<Loader variant="fullscreen" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveClass("af-spinner-loader--fullscreen");
  });

  it("should render children with fullscreen variant", () => {
    render(
      <Loader variant="fullscreen" text="Recherche en cours">
        <div>Contenu de page</div>
      </Loader>,
    );

    expect(screen.getByText("Contenu de page")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass(
      "af-spinner-loader--fullscreen",
    );
  });

  it("should render children when fullscreen variant is omitted", () => {
    render(
      <Loader text="Recherche en cours">
        <div>Contenu de page</div>
      </Loader>,
    );

    expect(screen.getByText("Contenu de page")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass(
      "af-spinner-loader--fullscreen",
    );
  });

  it("should render with content variant", () => {
    render(<Loader variant="content" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveClass("af-spinner-loader--content");
  });

  it("should render with custom className", () => {
    render(
      <Loader
        variant="content"
        text="Recherche en cours"
        className="custom-class"
      />,
    );

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveClass("custom-class");
  });
});
