import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Toggle } from "../ToggleCommon";

describe("Toggle component", () => {
  it("should change to selected", async () => {
    render(<Toggle />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).not.toBeChecked();

    await userEvent.click(toggle);

    expect(toggle).toBeChecked();
  });

  it("should render unselected", async () => {
    render(<Toggle checked={false} />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).not.toBeChecked();
    expect(toggle).not.toBeDisabled();
  });

  it("should render selected", async () => {
    render(<Toggle checked />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).toBeChecked();
    expect(toggle).not.toBeDisabled();
  });

  it("should render unselected and disabled", async () => {
    render(<Toggle checked={false} disabled />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).not.toBeChecked();
    expect(toggle).toBeDisabled();
  });

  it("should render selected and disabled", async () => {
    render(<Toggle checked disabled />);
    const toggle = screen.getByRole<HTMLInputElement>("checkbox");

    expect(toggle).toBeChecked();
    expect(toggle).toBeDisabled();
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Toggle />", async () => {
      const { container } = render(<Toggle aria-label="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
