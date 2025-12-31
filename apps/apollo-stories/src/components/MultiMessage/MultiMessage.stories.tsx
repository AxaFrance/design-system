import type { Meta, StoryObj } from "@storybook/react";

import { MultiMessage, messageVariants } from "@axa-fr/canopee-react/prospect";

import { renderMultiMessage, renderMultiMessageAll } from "./render";

import "./MultiMessage.story.scss";

const meta: Meta<typeof MultiMessage> = {
  component: MultiMessage,
  title: "Components/MultiMessage",
  parameters: {
    layout: "centered fullscreen",
  },
  argTypes: {
    variant: {
      options: Object.values(messageVariants),
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiMessage>;

export const Playground: Story = {
  name: "MultiMessage",
  render: renderMultiMessage,
  args: {
    notifications: [
      { key: "Notification 1", value: "First important message" },
      { key: "Notification 2", value: "Second important message" },
      { key: "Notification 3", value: "Third important message" },
    ],
  },
};

export const All: StoryObj<typeof MultiMessage> = {
  render: renderMultiMessageAll,
};
