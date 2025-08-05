import { ItemFormHelper } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFormHelper> = {
  title: "Components/ItemFormHelper",
  component: ItemFormHelper,
};

export default meta;

export const Default: StoryObj<typeof ItemFormHelper> = {
  name: "Item Form Helper",
  render: () => <ItemFormHelper />,
};
