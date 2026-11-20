import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Loader } from "../Loader";

describe("Loader component", () => {
  it("should render inline spinner variant", () => {
    render(<Loader variant="inline" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("af-loader");
    expect(spinnerElement).toHaveTextContent("Recherche en cours");
  });

  it("should render fullscreen spinner variant", () => {
    render(<Loader variant="fullscreen" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("af-loader--fullscreen");
  });

  it("should render children with fullscreen variant", () => {
    render(
      <Loader variant="fullscreen" text="Recherche en cours">
        <div>Contenu de page</div>
      </Loader>,
    );

    expect(screen.getByText("Contenu de page")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveClass("af-loader--fullscreen");
  });

  it("should render children when fullscreen variant is omitted", () => {
    render(
      <Loader text="Recherche en cours">
        <div>Contenu de page</div>
      </Loader>,
    );

    expect(screen.getByText("Contenu de page")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveClass("af-loader--fullscreen");
  });

  it("should render with content variant", () => {
    render(<Loader variant="content" text="Recherche en cours" />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("af-loader--content");
  });

  it("should render with custom className", () => {
    render(
      <Loader
        variant="content"
        text="Recherche en cours"
        className="custom-class"
      />,
    );

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toHaveClass("custom-class");
  });

  it("should announce its text politely, without a permanent busy state", () => {
    render(<Loader variant="content" text="Recherche en cours" />);

    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("Recherche en cours");
    expect(status).not.toHaveAttribute("aria-busy");
    expect(status).not.toHaveAttribute("aria-live", "assertive");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <Loader variant="inline" text="Recherche en cours" />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
