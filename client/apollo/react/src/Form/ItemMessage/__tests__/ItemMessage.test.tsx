import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ItemMessage } from "../ItemMessageCommon";

describe("ItemMessageCommon", () => {
  const message = "Custom message";
  it("renders the component with a custom message", () => {
    render(<ItemMessage message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("renders the component with error type", () => {
    const { container } = render(
      <ItemMessage message={message} type="error" />,
    );
    expect(container.querySelector(".af-item-message")).toHaveClass(
      "af-item-message--error",
    );
  });

  it("renders the component with success type", () => {
    const { container } = render(
      <ItemMessage message={message} type="success" />,
    );
    expect(container.querySelector(".af-item-message")).toHaveClass(
      "af-item-message--success",
    );
  });
});
