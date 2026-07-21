import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { ItemMultiSelect } from "../../ItemMultiSelect/ItemMultiSelectApollo";
import { MultiSelectListCommon } from "../MultiSelectListCommon";

describe("<MultiSelectListCommon />", () => {
  const items = [
    { id: "multiselect-option-1", label: "Option 1" },
    {
      id: "multiselect-option-2",
      label: "Option 2",
      checked: true,
    },
    {
      id: "multiselect-option-3",
      label: "Option 3",
      disabled: true,
    },
  ];

  it("should render all list items", () => {
    render(
      <MultiSelectListCommon
        items={items}
        ItemMultiSelectComponent={ItemMultiSelect}
      />,
    );

    expect(
      screen.getByRole("checkbox", { name: "Option 1" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Option 2" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Option 3" }),
    ).toBeInTheDocument();
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
