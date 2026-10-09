import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFormHelper> = {
  title: "Components/Form/ItemFormHelper",
  component: ItemFormHelper,
  argTypes: {
    variant: {
      options: ["todo", "inprogress", "validated"],
      control: { type: "select" },
    },
    label: { control: { type: "text" } },
    stateLabel: { control: { type: "text" } },
  },
};

export default meta;

export const Default: StoryObj<typeof ItemFormHelper> = {
  name: "Item Form Helper",
  args: {
    variant: "todo",
  },
};
