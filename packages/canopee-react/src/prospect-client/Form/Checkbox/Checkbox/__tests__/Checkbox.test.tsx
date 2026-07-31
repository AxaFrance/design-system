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

  it("should apply warning modifier when hasWarning is true", () => {
    render(<Checkbox hasWarning />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("af-checkbox af-checkbox--warning");
  });

  it("should not apply warning modifier when hasWarning is false", () => {
    render(<Checkbox hasWarning={false} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toHaveClass("af-checkbox--warning");
  });

  it("should set aria-invalid when hasError is true", () => {
    render(<Checkbox hasError />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });

  it("should not set aria-invalid when hasError is false", () => {
    render(<Checkbox hasError={false} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toHaveAttribute("aria-invalid", "true");
  });

  it("should set aria-errormessage when errorId is provided", () => {
    render(<Checkbox errorId="error-1" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-errormessage", "error-1");
  });

  it("should apply warning modifier and aria-invalid when both hasWarning and hasError are true", () => {
    render(<Checkbox hasWarning hasError />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("af-checkbox af-checkbox--warning");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });
});
