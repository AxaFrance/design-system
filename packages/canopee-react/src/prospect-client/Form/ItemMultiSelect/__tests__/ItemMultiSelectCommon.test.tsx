import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ItemMultiSelectCommon,
  type ItemMultiSelectVariant,
} from "../ItemMultiSelectCommon";
import { Checkbox } from "../../Checkbox/Checkbox/CheckboxCommon";

describe("ItemMultiSelectCommon Component", () => {
  it("should render the ItemMultiSelectCommon component with label and checkbox", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        id="test-checkbox"
      />,
    );

    const label = screen.getByText("Test Label");
    const checkbox = screen.getByRole("checkbox", { name: "Test Label" });

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  it("should render with primary variant by default", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        id="test-checkbox"
      />,
    );

    const container = screen.getByText("Test Label").closest("label");
    expect(container).toHaveClass(
      "af-item-multi-select",
      "af-item-multi-select--primary",
    );
  });

  it.each(["primary", "secondary"])(
    "should render with %s variant when specified",
    (variant) => {
      render(
        <ItemMultiSelectCommon
          label="Test Label"
          Checkbox={Checkbox}
          variant={variant as ItemMultiSelectVariant}
          id="test-checkbox"
        />,
      );

      const container = screen.getByText("Test Label").closest("label");
      expect(container).toHaveClass(
        "af-item-multi-select",
        `af-item-multi-select--${variant}`,
      );
    },
  );

  it("should apply custom class names", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        className="custom-class"
        id="test-checkbox"
      />,
    );

    const container = screen.getByText("Test Label").closest("label");
    expect(container).toHaveClass("af-item-multi-select custom-class");
  });

  it("should render as checked when the checked prop is true", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        checked
        onChange={vi.fn()}
        id="test-checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Test Label" });
    expect(checkbox).toBeChecked();
  });

  it("should call the onChange handler when checkbox is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        onChange={handleChange}
        id="test-checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Test Label" });
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("should call the onChange handler when label is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        onChange={handleChange}
        id="test-checkbox"
      />,
    );

    const label = screen.getByText("Test Label");
    await user.click(label);

    expect(handleChange).toHaveBeenCalledTimes(1);
    const checkbox = screen.getByRole("checkbox", { name: "Test Label" });
    expect(checkbox).toBeChecked();
  });

  it("should associate label with checkbox using htmlFor and id", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        id="custom-id"
      />,
    );

    const label = screen.getByText("Test Label").closest("label");
    const checkbox = screen.getByRole("checkbox", { name: "Test Label" });

    expect(label).toHaveAttribute("for", "custom-id");
    expect(checkbox).toHaveAttribute("id", "custom-id");
  });

  it("should pass additional props to the checkbox", () => {
    render(
      <ItemMultiSelectCommon
        label="Test Label"
        Checkbox={Checkbox}
        name="test-name"
        aria-label="custom"
        id="test-checkbox"
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("name", "test-name");
    expect(checkbox).toHaveAttribute("aria-label", "custom");
  });
});
