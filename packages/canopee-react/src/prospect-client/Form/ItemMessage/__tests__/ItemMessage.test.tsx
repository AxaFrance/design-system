import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, it, expect } from "vitest";
import { ItemMessage } from "../ItemMessage";

describe("ItemMessage", () => {
  const message = "Custom message";
  it("renders the component with a custom message", () => {
    render(<ItemMessage message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("renders the component with error type", () => {
    const { container } = render(
      <ItemMessage message={message} messageType="error" />,
    );
    expect(container.querySelector(".af-item-message")).toHaveClass(
      "af-item-message--error",
    );
  });

  it("renders the component with success type", () => {
    const { container } = render(
      <ItemMessage message={message} messageType="success" />,
    );
    expect(container.querySelector(".af-item-message")).toHaveClass(
      "af-item-message--success",
    );
  });

  it("renders the component with warning type", () => {
    const { container } = render(
      <ItemMessage message={message} messageType="warning" />,
    );
    expect(container.querySelector(".af-item-message")).toHaveClass(
      "af-item-message--warning",
    );
  });

  describe("A11Y", () => {
    it("announces a success message politely with the status role", () => {
      render(<ItemMessage message={message} messageType="success" />);
      const status = screen.getByRole("status");

      expect(status).toHaveTextContent(message);
      expect(status).not.toHaveAttribute("aria-live");
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it.each(["error", "warning"] as const)(
      "announces the %s message with the alert role",
      (messageType) => {
        render(<ItemMessage message={message} messageType={messageType} />);
        const alert = screen.getByRole("alert");

        expect(alert).toHaveTextContent(message);
        expect(alert).not.toHaveAttribute("aria-live");
      },
    );

    it("shouldn't have an accessibility violation", async () => {
      const { container } = render(
        <ItemMessage message={message} messageType="success" />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
