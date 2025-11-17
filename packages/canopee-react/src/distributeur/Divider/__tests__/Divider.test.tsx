import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Divider } from "../Divider";

describe("Divider component", () => {
  it("should renders with horizontal mode", () => {
    render(<Divider mode="horizontal" />);

    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("af-divider", "af-divider--horizontal");
  });

  it("should render with horizontal mode by default", () => {
    render(<Divider />);

    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("af-divider", "af-divider--horizontal");
  });

  it("should render with vertical mode", () => {
    render(<Divider mode="vertical" />);

    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("af-divider", "af-divider--vertical");
  });
});
