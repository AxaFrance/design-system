import {
  MultiSelectList,
  type MultiSelectListProps,
} from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "@axa-fr/canopee-react/client";

const meta: Meta<typeof MultiSelectList> = {
  title: "Components/Form/MultiSelectList",
  component: MultiSelectList,
};

export default meta;

type Story = StoryObj<typeof MultiSelectList>;

const threeItems: MultiSelectListProps["items"] = [
  { id: "item-1", label: "Option 1", Checkbox: CheckboxComponent },
  {
    id: "item-2",
    label: "Option 2",
    checked: true,
    Checkbox: CheckboxComponent,
  },
  { id: "item-3", label: "Option 3", Checkbox: CheckboxComponent },
];

const sixItems: MultiSelectListProps["items"] = [
  { id: "item-1", label: "Option 1", Checkbox: CheckboxComponent },
  {
    id: "item-2",
    label: "Option 2",
    checked: true,
    Checkbox: CheckboxComponent,
  },
  { id: "item-3", label: "Option 3", Checkbox: CheckboxComponent },
  { id: "item-4", label: "Option 4", Checkbox: CheckboxComponent },
  { id: "item-5", label: "Option 5", Checkbox: CheckboxComponent },
  { id: "item-6", label: "Option 6", Checkbox: CheckboxComponent },
];

export const ThreeItems: Story = {
  args: {
    items: threeItems,
  },
};

export const SixItemsScroll: Story = {
  args: {
    items: sixItems,
  },
};
