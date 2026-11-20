import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CheckboxCard } from "../Checkbox/CheckboxCard";
import { RadioCard } from "../Radio/RadioCard";

describe.each([
  ["radio", RadioCard],
  ["checkbox", CheckboxCard],
] as const)("SelectionCard (%s)", (role, Card) => {
  it("should keep actions outside the selectable card", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onAction = vi.fn();
    render(
      <Card
        id="transport"
        name="transport"
        label="Train"
        orientation="vertical"
        onChange={onChange}
        action={
          <button type="button" onClick={onAction}>
            Details
          </button>
        }
      />,
    );

    const input = screen.getByRole(role, { name: "Train" });
    const card = input.closest("label");
    const action = screen.getByRole("button", { name: "Details" });
    const wrapper = card?.parentElement;

    expect(wrapper).toHaveClass(
      "af-selection-card-item",
      "af-selection-card-item--vertical",
    );
    expect(card).toHaveClass("af-selection-card-item__card");
    expect(action.parentElement).toHaveClass("af-selection-card-item__action");
    expect(action.parentElement?.parentElement).toBe(wrapper);
    expect(card).not.toContainElement(action);

    await user.click(action);
    expect(onAction).toHaveBeenCalledOnce();
    expect(onChange).not.toHaveBeenCalled();
    expect(input).not.toBeChecked();

    await user.click(screen.getByText("Train"));
    expect(input).toBeChecked();
    expect(onChange).toHaveBeenCalledOnce();
  });
});
