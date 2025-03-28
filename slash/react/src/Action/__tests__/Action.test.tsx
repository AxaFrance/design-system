import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Action } from "../Action";

describe("Action component", () => {
  it("should renders correctly", () => {
    render(
      <Action
        title="action-link-title"
        icon="link"
        id="action-link"
        href="https://axa.fr"
        target="_blank"
      >
        Action link
      </Action>,
    );

    const action = screen.getByTitle("action-link-title");
    const actionIcon = screen.getByRole("img");

    expect(action).toHaveAttribute("href", "https://axa.fr");
    expect(action).toHaveAttribute("target", "_blank");
    expect(action).toHaveAttribute("id", "action-link");
    expect(actionIcon).toBeInTheDocument();
  });
});
