import { ItemMessage } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemMessage> = {
  title: "Components/Form/ItemMessage",
  component: ItemMessage,
};
export default meta;

export const Error: StoryObj<typeof ItemMessage> = {
  args: {
    message: "Error Message",
  },
};

export const Success: StoryObj<typeof ItemMessage> = {
  args: {
    message: "Success Message",
    messageType: "success",
  },
};
