import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ItemFormHelper } from "../ItemFormHelper";

describe("ItemFormHelper", () => {
  it("affiche le bon label et la bonne couleur pour to-do", () => {
    render(<ItemFormHelper variant="to-do" />);
    expect(screen.getByText("à compléter")).toBeInTheDocument();
    // Vérifier la couleur du span
    const span = screen.getByText("à compléter");
    expect(span).toHaveStyle({ color: "var(--fill)" }); // Ajustez si nécessaire
  });

  it("affiche le bon label et la bonne couleur pour wip", () => {
    render(<ItemFormHelper variant="wip" />);
    expect(screen.getByText("en cours")).toBeInTheDocument();
    const span = screen.getByText("en cours");
    expect(span).toHaveStyle({ color: "var(--fill)" }); // si la couleur est la même que to-do
  });

  it("affiche le bon label et la bonne couleur pour validation", () => {
    render(<ItemFormHelper variant="validation" />);
    expect(screen.getByText("validé")).toBeInTheDocument();
    const span = screen.getByText("validé");
    expect(span).toHaveStyle({ color: "var(--green40)" }); // couleur spécifique
  });

  it("affiche un label personnalisé si fourni", () => {
    render(<ItemFormHelper variant="validation" label="Tâche terminée" />);
    expect(screen.getByText("Tâche terminée")).toBeInTheDocument();
  });
});
