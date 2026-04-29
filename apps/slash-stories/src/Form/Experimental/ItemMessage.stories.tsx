import { ItemMessage } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Atoms/ItemMessage",
  component: ItemMessage,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "inline-radio" },
      options: [undefined, "error", "success"],
    },
  },
});

export const ItemMessageHelpStory = meta.story({
  name: "Help Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    children: "Help message",
  },
  argTypes: {},
});

export const ItemMessageErrorStory = meta.story({
  name: "Error Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    variant: "error",
    children: "Error message",
  },
  argTypes: {},
});

export const ItemMessageSuccessStory = meta.story({
  name: "Success Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    variant: "success",
    children: "Success message",
  },
  argTypes: {},
});
