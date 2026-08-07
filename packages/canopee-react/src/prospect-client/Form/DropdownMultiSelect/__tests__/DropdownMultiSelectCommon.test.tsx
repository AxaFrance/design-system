import { render, screen } from "@testing-library/react";
import { isInaccessible } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { Tag } from "../../../Tag/TagCommon";
import { TagList } from "../../../TagList/TagListApollo";
import { MultiSelectList } from "../../MultiSelectList/MultiSelectListApollo";
import { DropdownMultiSelectCommon } from "../DropdownMultiSelectCommon";
import { ItemLabel } from "../../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

const findTagElementByLabel = (label: string) => {
  return (
    screen
      .queryAllByText(label)
      .find((elem) => elem.getAttribute("class")?.includes("af-tag__label")) ??
    null
  );
};

describe("<DropdownMultiSelectCommon />", () => {
  const items = [
    { id: "option-1", label: "Option 1" },
    { id: "option-2", label: "Option 2", checked: true },
    { id: "option-3", label: "Option 3" },
  ];

  const renderDropdownMultiSelect = (
    props: Partial<React.ComponentProps<typeof DropdownMultiSelectCommon>> = {},
  ) =>
    render(
      <DropdownMultiSelectCommon
        label="Label"
        items={items}
        MultiSelectListComponent={MultiSelectList}
        TagListComponent={TagList}
        TagComponent={Tag}
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
        {...props}
      />,
    );

  it("renders selected summary and tags", () => {
    renderDropdownMultiSelect({ values: ["option-1", "option-3"] });

    expect(screen.getByText("2 éléments sélectionnés")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Label 2 éléments sélectionnés 2 éléments sélectionnés sur 3",
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 3")).toBeInTheDocument();
  });

  it("renders the empty summary without tags when the selection is empty", () => {
    renderDropdownMultiSelect({ values: [] });

    expect(screen.getByText("Sélectionner")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Label Sélectionner 0 élément sélectionné sur 3",
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).not.toBeInTheDocument();
    expect(findTagElementByLabel("Option 2")).not.toBeInTheDocument();
    expect(findTagElementByLabel("Option 3")).not.toBeInTheDocument();
  });

  it("uses checked items as the initial uncontrolled selection", () => {
    renderDropdownMultiSelect();

    expect(screen.getByText("1 élément sélectionné")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 2")).toBeInTheDocument();
  });

  it("updates the summary when list items change", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const ControlledDropdownMultiSelect = () => {
      const [values, setValues] = useState<string[]>(["option-2"]);

      return (
        <DropdownMultiSelectCommon
          id="dropdown-multi-select"
          label="Label"
          items={items}
          values={values}
          onChange={(nextValues) => {
            setValues(nextValues);
            handleChange(nextValues);
          }}
          MultiSelectListComponent={MultiSelectList}
          TagListComponent={TagList}
          TagComponent={Tag}
          ItemLabelComponent={ItemLabel}
          ItemMessageComponent={ItemMessage}
        />
      );
    };

    render(<ControlledDropdownMultiSelect />);

    expect(screen.getByText("1 élément sélectionné")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Label 1 élément sélectionné 1 élément sélectionné sur 3",
      }),
    );
    await user.click(screen.getByRole("checkbox", { name: "Option 1" }));

    expect(handleChange).toHaveBeenCalledWith(["option-2", "option-1"]);
    expect(screen.getByText("2 éléments sélectionnés")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Label 2 éléments sélectionnés 2 éléments sélectionnés sur 3",
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 2")).toBeInTheDocument();
  });

  it("toggles option from list", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    renderDropdownMultiSelect({
      values: ["option-2"],
      onChange: handleChange,
    });

    await user.click(screen.getByRole("button", { name: "Label" }));
    await user.click(screen.getByRole("checkbox", { name: "Option 1" }));

    expect(handleChange).toHaveBeenCalledWith(["option-2", "option-1"]);
  });

  it("uses defaultValues and updates the summary in uncontrolled mode", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect({ defaultValues: ["option-1"] });

    expect(screen.getByText("1 élément sélectionné")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Label" }));
    await user.click(screen.getByRole("checkbox", { name: "Option 3" }));

    expect(screen.getByText("2 éléments sélectionnés")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 3")).toBeInTheDocument();
  });

  it("keeps the list closed when the trigger is disabled", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect({ disabled: true });

    const trigger = screen.getByRole("button", { name: "Label" });

    expect(trigger).toBeDisabled();
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("checkbox", { name: "Option 1" }),
    ).not.toBeInTheDocument();
  });

  it("applies warning styles and renders helper and message text", () => {
    renderDropdownMultiSelect({
      values: [],
      helper: "Information complémentaire",
      message: "Attention au format",
      messageType: "warning",
    });

    const trigger = screen.getByRole("button", { name: "Label" });

    expect(trigger).toHaveClass("af-form__dropdown-input--warning");
    expect(screen.getByText("Information complémentaire")).toBeInTheDocument();
    expect(screen.getByText("Attention au format")).toBeInTheDocument();
  });

  it("closes the list when pressing Escape", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect();

    const trigger = screen.getByRole("button", { name: "Label" });

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("checkbox", { name: "Option 1" }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("checkbox", { name: "Option 1" }),
    ).not.toBeInTheDocument();
  });

  it("closes the list when clicking outside", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect();

    const trigger = screen.getByRole("button", { name: "Label" });

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await user.click(document.body);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("checkbox", { name: "Option 1" }),
    ).not.toBeInTheDocument();
  });

  it("hides selected tags from the accessibility tree", () => {
    renderDropdownMultiSelect({ values: ["option-1", "option-3"] });

    const option1Tag = findTagElementByLabel("Option 1");
    const option3Tag = findTagElementByLabel("Option 3");

    expect(option1Tag).toBeInTheDocument();
    expect(option3Tag).toBeInTheDocument();
    expect(option1Tag).not.toBeNull();
    expect(option3Tag).not.toBeNull();
    expect(isInaccessible(option1Tag as HTMLElement)).toBe(true);
    expect(isInaccessible(option3Tag as HTMLElement)).toBe(true);
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = renderDropdownMultiSelect({ values: ["option-2"] });

    expect(await axe(container)).toHaveNoViolations();
  });
});
