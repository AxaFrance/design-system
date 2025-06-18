import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ModalCoreBody } from "../ModalCoreBody";
import type { HasScrollState } from "../../../utilities/hook/useHasScroll";

vi.mock("../../../utilities/hook/useHasScroll.ts", () => ({
  useHasScroll: vi.fn().mockReturnValue({
    vertical: false,
    horizontal: false,
  } satisfies HasScrollState),
}));

describe("ModalCoreBody component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<ModalCoreBody>Test Content</ModalCoreBody>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ModalCoreBody className="custom-class">Test Content</ModalCoreBody>,
    );
    expect(container.firstChild).toHaveClass(
      "af-apollo-modal__body custom-class",
    );
  });

  it("passes other props to the main element", () => {
    const { container } = render(
      <ModalCoreBody id="test-id">Test Content</ModalCoreBody>,
    );
    expect(container.firstChild).toHaveAttribute("id", "test-id");
  });
});
