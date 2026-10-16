import { render, screen } from "@testing-library/react";
import { isInaccessible } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { type ComponentProps } from "react";
import { ItemLabel as ItemLabelLF } from "../../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../../ItemMessage/ItemMessage";
import { DropdownMultiSelectCommon } from "../DropdownMultiSelectCommon";
import { MultiSelectList as MultiSelectListLF } from "../../MultiSelectList/MultiSelectListLF";
import { TagListCommon } from "../../../TagList/TagListCommon";
import { Tag as TagCommon } from "../../../Tag/TagLF";

const findTagElementByLabel = (label: string) => {
  return (
    screen
      .queryAllByText(label)
      .find((elem) => elem.getAttribute("class")?.includes("af-tag__label")) ??
    null
  );
};

describe("DropdownMultiSelectCommon Component", () => {
  const items = [
    { id: "option-1", label: "Option 1" },
    { id: "option-2", label: "Option 2", checked: true },
    { id: "option-3", label: "Option 3" },
  ];

  const renderDropdownMultiSelect = (
    props: Partial<ComponentProps<typeof DropdownMultiSelectCommon>> = {},
  ) =>
    render(
      <DropdownMultiSelectCommon
        label="Label"
        name="dropdown-multi-select"
        className=""
        items={items}
        MultiSelectListComponent={MultiSelectListLF}
        ItemLabelComponent={ItemLabelLF}
        ItemMessageComponent={ItemMessage}
        TagListComponent={TagListCommon}
        TagComponent={TagCommon}
        {...props}
      />,
    );

  it("renders selected summary and tags", () => {
    renderDropdownMultiSelect({ values: ["option-1", "option-3"] });

    expect(
      screen.getByRole("button", {
        name: "2 éléments sélectionnés",
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 3")).toBeInTheDocument();
  });

  it("renders the empty summary without tags when the selection is empty", () => {
    renderDropdownMultiSelect({ values: [], items: [] });

    expect(
      screen.getByRole("button", {
        name: /^Sélectionner/i,
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).not.toBeInTheDocument();
  });

  it("uses checked items as the initial uncontrolled selection", () => {
    renderDropdownMultiSelect();

    expect(screen.getByText("1 élément sélectionné")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 2")).toBeInTheDocument();
  });

  it("updates the summary when list items change", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect();

    await user.click(
      screen.getByRole("button", {
        name: "1 élément sélectionné",
      }),
    );
    await user.click(screen.getByRole("checkbox", { name: "Option 1" }));

    expect(
      screen.getByRole("button", {
        name: "2 éléments sélectionnés",
      }),
    ).toBeInTheDocument();
    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 2")).toBeInTheDocument();
  });

  it("uses defaultValues and updates the summary in uncontrolled mode", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect({ values: ["option-1"] });

    expect(findTagElementByLabel("Option 1")).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", {
        name: /^1 élément sélectionné/i,
      }),
    );
    await user.click(screen.getByRole("checkbox", { name: "Option 3" }));

    expect(screen.getByText("2 éléments sélectionnés")).toBeInTheDocument();
    expect(findTagElementByLabel("Option 3")).toBeInTheDocument();
  });

  it("keeps the list closed when the trigger is disabled", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect({ disabled: true });

    const trigger = screen.getByRole("button");

    const list = screen.queryByRole("group", { name: /Label/i });

    expect(trigger).toBeDisabled();
    expect(list).toBeNull();

    await user.click(trigger);

    expect(list).toBeNull();
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

    const trigger = screen.getByRole("button", {
      name: /^Sélectionner/i,
    });

    expect(trigger).toHaveClass("af-form__dropdown-input--warning");
    expect(screen.getByText("Information complémentaire")).toBeInTheDocument();
    expect(screen.getByText("Attention au format")).toBeInTheDocument();
  });

  it("closes the list when pressing Escape", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect();

    const trigger = screen.getByRole("button", {
      name: /^1 élément sélectionné/i,
    });

    await user.click(trigger);
    const list = screen.getByRole("group");
    expect(list).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Option 1" }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(list).not.toBeVisible();
    expect(
      screen.queryByRole("checkbox", { name: "Option 1" }),
    ).not.toBeInTheDocument();
  });

  it("closes the list when clicking outside", async () => {
    const user = userEvent.setup();

    renderDropdownMultiSelect();

    const trigger = screen.getByRole("button", {
      name: /^1 élément sélectionné/i,
    });

    await user.click(trigger);
    const list = screen.getByRole("group");
    expect(list).toBeInTheDocument();

    await user.click(document.body);
    expect(list).not.toBeVisible();
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
