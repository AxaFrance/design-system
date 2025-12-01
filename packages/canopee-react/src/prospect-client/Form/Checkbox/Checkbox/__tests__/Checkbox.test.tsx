import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../CheckboxCommon";

describe("CheckboxCommon Component", () => {
  it("should render the CheckboxCommon component with label", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass("af-checkbox");
  });

  it("should render as checked when the checked prop is true", () => {
    render(<Checkbox checked onChange={vi.fn()} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("should call the onChange handler when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should pass additional props to the input element", () => {
    render(<Checkbox aria-label="custom" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-label", "custom");
  });

  it("should apply custom class names", () => {
    render(<Checkbox className="custom-class" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("af-checkbox custom-class");
  });
});
