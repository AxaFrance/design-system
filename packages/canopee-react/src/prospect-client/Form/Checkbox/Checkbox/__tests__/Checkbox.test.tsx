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

  it("should apply error modifier and aria-invalid when variant is error", () => {
    render(<Checkbox variant="error" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("af-checkbox af-checkbox--error");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });

  it("should not apply error modifier when variant is not set", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toHaveClass("af-checkbox--error");
    expect(checkbox).not.toHaveAttribute("aria-invalid");
  });

  it("should apply warning modifier when variant is warning", () => {
    render(<Checkbox variant="warning" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("af-checkbox af-checkbox--warning");
  });

  it("should not apply warning modifier when variant is not set", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toHaveClass("af-checkbox--warning");
  });

  it("should set aria-errormessage when errorId is provided", () => {
    render(<Checkbox errorId="error-1" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-errormessage", "error-1");
  });
});
