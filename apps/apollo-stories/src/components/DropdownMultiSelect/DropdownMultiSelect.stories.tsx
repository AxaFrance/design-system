import {
  DropdownMultiSelect,
  type DropdownMultiSelectProps,
} from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";

const items: DropdownMultiSelectProps["items"] = [
  { id: "option-1", label: "Option 1" },
  { id: "option-2", label: "Option 2", checked: true },
  { id: "option-3", label: "Option 3" },
  { id: "option-4", label: "Option 4" },
  { id: "option-5", label: "Option 5" },
  { id: "option-6", label: "Option 6" },
];

const meta: Meta<typeof DropdownMultiSelect> = {
  title: "Components/Form/DropdownMultiSelect",
  component: DropdownMultiSelect,
  args: {
    label: "Choix multiples",
    description: "Description",
    moreButtonLabel: "En savoir plus",
    placeholder: "Sélectionner",
    helper: "Sélectionnez une ou plusieurs options",
    items,
    values: ["option-2", "option-5"],
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
    values: [],
  },
};

export const ErrorInForm: Story = {
  render: (args) => (
    <form>
      <DropdownMultiSelect
        {...args}
        message="Champ obligatoire"
        messageType="error"
      />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
