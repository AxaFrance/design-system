import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ItemFormHelper } from "../ItemFormHelper";

describe("ItemFormHelper", () => {
  it("renders the default label and modifier class for todo", () => {
    render(<ItemFormHelper variant="todo" />);

    expect(screen.getByText("à compléter")).toBeInTheDocument();
    expect(screen.getByText("à compléter").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--todo",
    );
  });

  it("renders the default label and modifier class for inprogress", () => {
    render(<ItemFormHelper variant="inprogress" />);

    expect(screen.getByText("en cours")).toBeInTheDocument();
    expect(screen.getByText("en cours").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--inprogress",
    );
  });

  it("renders the default label and modifier class for validated", () => {
    render(<ItemFormHelper variant="validated" />);

    expect(screen.getByText("validé")).toBeInTheDocument();
    expect(screen.getByText("validé").parentElement).toHaveClass(
      "af-item-form-helper",
      "af-item-form-helper--validated",
    );
  });

  it("renders a custom label when provided", () => {
    render(<ItemFormHelper variant="validated" label="Tâche terminée" />);

    expect(screen.getByText("Tâche terminée")).toBeInTheDocument();
  });

  it("forwards an additional className", () => {
    render(<ItemFormHelper variant="todo" className="custom" />);

    expect(screen.getByText("à compléter").parentElement).toHaveClass("custom");
  });
});
