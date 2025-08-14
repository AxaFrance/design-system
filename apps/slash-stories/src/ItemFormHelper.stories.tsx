import { ItemFormHelper } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import "./ItemFormHelper.stories.scss?inline";

const meta: Meta<typeof ItemFormHelper> = {
  title: "Components/ItemFormHelper",
  component: ItemFormHelper,
};

export default meta;

export const Default: StoryObj<typeof ItemFormHelper> = {
  name: "Item Form Helper",
  argTypes: {
    variant: {
      options: ["to-do", "wip", "validation"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <div className="helper">
      <ItemFormHelper {...args} />
    </div>
  ),
};
