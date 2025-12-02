import {
  ItemMessage,
  itemMessageVariants,
} from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemMessage> = {
  title: "Components/Form/ItemMessage",
  component: ItemMessage,
  argTypes: {
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
};
export default meta;

export const Playground: StoryObj<typeof ItemMessage> = {
  args: {
    message: "Message",
  },
};
