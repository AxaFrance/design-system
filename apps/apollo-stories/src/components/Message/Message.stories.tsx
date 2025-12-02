import type { Meta, StoryObj } from "@storybook/react";

import {
  Message,
  messageVariants,
  type MessageVariants,
} from "@axa-fr/canopee-react/prospect";

import { renderMessage, renderMessageAll } from "./render";

import "./Message.story.scss";

const meta: Meta<typeof Message> = {
  component: Message,
  title: "Components/Message",
  parameters: {
    layout: "centered fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Message>,
  "children" | "variant"
> & {
  children: string;
  variant: MessageVariants;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Message",
  render: renderMessage,
  args: {
    children: "Message",
  },
  argTypes: {
    variant: {
      options: Object.values(messageVariants),
      control: { type: "select" },
    },
  },
};

export const All: StoryObj<typeof Message> = {
  render: renderMessageAll,
};
