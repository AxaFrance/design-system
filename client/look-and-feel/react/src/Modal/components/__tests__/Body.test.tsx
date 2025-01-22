import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Body } from "../Body";

describe("Body component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Body>Test Content</Body>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Body className="custom-class">Test Content</Body>,
    );
    expect(container.firstChild).toHaveClass("af-modal__body custom-class");
  });

  it("passes other props to the section element", () => {
    const { container } = render(<Body id="test-id">Test Content</Body>);
    expect(container.firstChild).toHaveAttribute("id", "test-id");
  });
});
