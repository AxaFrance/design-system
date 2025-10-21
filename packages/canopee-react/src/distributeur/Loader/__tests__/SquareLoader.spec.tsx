import { render, screen } from "@testing-library/react";
import { SquareLoader } from "../SquareLoader";

const LEGACY_MODE_TEXT_CASES = [
  { mode: "get", text: "Chargement en cours" },
  { mode: "post", text: "Sauvegarde en cours" },
  { mode: "delete", text: "Suppression en cours" },
  { mode: "update", text: "Mise à jour en cours" },
  {
    mode: "error",
    text: "Une erreur est survenue lors du chargement du composant",
  },
] as const;

describe("SquareLoader component", () => {
  it("should render deprecated SquareLoader component", () => {
    render(
      <SquareLoader mode="get">
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    expect(screen.getByText("Mon contenu legacy")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Chargement en cours");
  });

  it("should not display legacy loader when mode is none", () => {
    render(
      <SquareLoader mode="none">
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    expect(screen.getByText("Mon contenu legacy")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("should not display legacy loader when mode is omitted", () => {
    render(
      <SquareLoader>
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    expect(screen.getByText("Mon contenu legacy")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it.each(LEGACY_MODE_TEXT_CASES)(
    "should display expected legacy text for mode $mode",
    ({ mode, text }) => {
      render(
        <SquareLoader mode={mode}>
          <div>Mon contenu legacy</div>
        </SquareLoader>,
      );

      expect(screen.getByRole("alert")).toHaveTextContent(text);
    },
  );

  it("should prioritize custom text over mode text for legacy loader", () => {
    render(
      <SquareLoader mode="get" text="Texte personnalise">
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Texte personnalise");
  });

  it("should render legacy error mode without animation", () => {
    render(
      <SquareLoader mode="error">
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveAttribute("aria-busy", "false");
    expect(document.querySelector(".af-spinner__animation")).toBeNull();
  });

  it("should render legacy non-error mode with animation", () => {
    render(
      <SquareLoader mode="get">
        <div>Mon contenu legacy</div>
      </SquareLoader>,
    );

    const spinnerElement = screen.getByRole("alert");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
    expect(document.querySelector(".af-spinner__animation")).not.toBeNull();
  });
});
