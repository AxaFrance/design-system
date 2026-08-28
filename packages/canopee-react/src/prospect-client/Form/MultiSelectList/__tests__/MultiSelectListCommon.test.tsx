import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "../../Checkbox/Checkbox/CheckboxCommon";
import { ItemMultiSelect } from "../../ItemMultiSelect/ItemMultiSelectApollo";
import { MultiSelectListCommon } from "../MultiSelectListCommon";

describe("<MultiSelectListCommon />", () => {
  const items = [
    { id: "multiselect-option-1", label: "Option 1", Checkbox },
    {
      id: "multiselect-option-2",
      label: "Option 2",
      checked: true,
      Checkbox,
    },
    {
      id: "multiselect-option-3",
      label: "Option 3",
      disabled: true,
      Checkbox,
    },
  ];

  it("should render all list items", () => {
    render(
      <MultiSelectListCommon
        items={items}
        ItemMultiSelectComponent={ItemMultiSelect}
      />,
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("should alternate variants between primary and secondary", () => {
    const { container } = render(
      <MultiSelectListCommon
        items={items}
        ItemMultiSelectComponent={ItemMultiSelect}
      />,
    );

    const labels = container.querySelectorAll(".af-item-multi-select");
    expect(labels[0]).toHaveClass("af-item-multi-select--primary");
    expect(labels[1]).toHaveClass("af-item-multi-select--secondary");
    expect(labels[2]).toHaveClass("af-item-multi-select--primary");
  });

  it("should call onChange with id and checked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <MultiSelectListCommon
        items={items}
        onChange={handleChange}
        ItemMultiSelectComponent={ItemMultiSelect}
      />,
    );

    await user.click(screen.getByRole("checkbox", { name: "Option 1" }));

    expect(handleChange).toHaveBeenCalledWith("multiselect-option-1", true);
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <MultiSelectListCommon />", async () => {
      const { container } = render(
        <MultiSelectListCommon
          items={items}
          ItemMultiSelectComponent={ItemMultiSelect}
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
