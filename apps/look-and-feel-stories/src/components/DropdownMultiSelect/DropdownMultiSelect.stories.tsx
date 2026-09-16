import {
  DropdownMultiSelect,
  type DropdownMultiSelectProps,
} from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";

const items: DropdownMultiSelectProps["items"] = [
  { id: "option-1", label: "Option 1" },
  { id: "option-2", label: "Option 2" },
  { id: "option-3", label: "Option 3" },
  { id: "option-4", label: "Option 4" },
  { id: "option-5", label: "Option 5" },
  { id: "option-6", label: "Option 6" },
];

const meta: Meta<typeof DropdownMultiSelect> = {
  title: "Components/Form/DropdownMultiSelect",
  component: DropdownMultiSelect,
  render: (args) => (
    <div style={{ width: "300px" }}>
      <DropdownMultiSelect {...args} />
    </div>
  ),
  args: {
    label: "Choix multiples",
    description: "Description",
    moreButtonLabel: "En savoir plus",
    helper: "Sélectionnez une ou plusieurs options",
    items,
    required: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownMultiSelect>;

export const Playground: Story = {};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const RequiredOption: Story = {
  args: {
    required: true,
  },
};

export const WithMessage: Story = {
  args: {
    message: "Champ obligatoire",
    messageType: "error",
    values: ["option-2", "option-5"],
    items: items.map((item) => ({
      ...item,
      checked: ["option-2", "option-5"].includes(item.id),
    })),
  },
  render: (args) => <DropdownMultiSelect {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
