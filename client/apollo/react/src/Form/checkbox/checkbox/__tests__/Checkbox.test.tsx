import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Checkbox } from "../CheckboxApollo";

describe("CheckboxCommon Component", () => {
  it("should render the CheckboxCommon component with label", () => {
    // Act
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Then
    expect(checkbox).toBeInTheDocument();
  });

  it("should checked the checkbox", async () => {
    // Act
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Then
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should set aria-invalid to true when isError is true", () => {
    // Act
    render(<Checkbox hasError />);

    // Then
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });

  it("should violate accessibility the of CheckboxText", async () => {
    // Act
    const { container } = render(<Checkbox />);

    // Then
    expect(await axe(container)).toHaveNoViolations();
  });
});
