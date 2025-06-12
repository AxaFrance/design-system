import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ModalCoreBody } from "../ModalCoreBody";

describe("ModalCoreBody component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<ModalCoreBody>Test Content</ModalCoreBody>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ModalCoreBody className="custom-class">Test Content</ModalCoreBody>,
    );
    expect(container.firstChild).toHaveClass("af-modal__body custom-class");
  });

  it("passes other props to the section element", () => {
    const { container } = render(
      <ModalCoreBody id="test-id">Test Content</ModalCoreBody>,
    );
    expect(container.firstChild).toHaveAttribute("id", "test-id");
  });
});
