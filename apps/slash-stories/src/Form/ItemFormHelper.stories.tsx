import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFormHelper> = {
  title: "Form/ItemFormHelper",
  component: ItemFormHelper,
  argTypes: {
    variant: {
      options: ["todo", "inprogress", "validated"],
      control: { type: "select" },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ItemFormHelper> = {
  name: "Item Form Helper",
  args: {
    variant: "todo",
  },
};
