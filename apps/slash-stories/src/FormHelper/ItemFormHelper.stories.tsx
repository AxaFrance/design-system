import type { Meta, StoryObj } from "@storybook/react";
import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";

const meta: Meta<typeof ItemFormHelper> = {
  component: ItemFormHelper,
  title: "Components/FormHelper/ItemFormHelper",
  argTypes: {
    label: { control: { type: "text" } },
    mode: {
      options: ["edited", "locked", "validated", "disabled"],
      control: { type: "select" },
    },
    anchor: { control: { type: "text" } },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "ItemFormHelper",
  render: (args) => (
    <ul>
      <ItemFormHelper {...args} />
    </ul>
  ),
  args: {
    label: "En cours",
    mode: "edited",
    anchor: "",
  },
};
