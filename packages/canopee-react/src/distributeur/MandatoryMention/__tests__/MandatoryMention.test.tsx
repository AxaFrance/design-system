import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MandatoryMention } from "../MandatoryMention";

describe("MandatoryMention", () => {
  it("renders correct text for variant all", () => {
    render(<MandatoryMention variant="all" />);
    const el = screen.getByText("Tous les champs sont obligatoires");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("af-mandatory--all");
  });

  it("renders correct text for variant one", () => {
    render(<MandatoryMention variant="one" />);
    const el = screen.getByText(/Champs obligatoires \*/);
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("af-mandatory--one");
  });

  it("applies provided id prop", () => {
    render(<MandatoryMention variant="one" id="mention-test" />);
    const el = screen.getByText(/Champs obligatoires \*/);
    expect(el).toHaveAttribute("id", "mention-test");
  });
});
