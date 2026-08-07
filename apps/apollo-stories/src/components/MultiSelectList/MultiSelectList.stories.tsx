import {
  MultiSelectList,
  type MultiSelectListProps,
} from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultiSelectList> = {
  title: "Components/Form/MultiSelectList",
  component: MultiSelectList,
};

export default meta;

type Story = StoryObj<typeof MultiSelectList>;

const threeItems: MultiSelectListProps["items"] = [
  { id: "item-1", label: "Option 1" },
  { id: "item-2", label: "Option 2", checked: true },
  { id: "item-3", label: "Option 3" },
];

const sixItems: MultiSelectListProps["items"] = [
  { id: "item-1", label: "Option 1" },
  { id: "item-2", label: "Option 2", checked: true },
  { id: "item-3", label: "Option 3" },
  { id: "item-4", label: "Option 4" },
  { id: "item-5", label: "Option 5" },
  { id: "item-6", label: "Option 6" },
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
