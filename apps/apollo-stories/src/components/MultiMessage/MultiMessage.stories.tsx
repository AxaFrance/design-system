import type { Meta, StoryObj } from "@storybook/react";

import { MultiMessage } from "@axa-fr/canopee-react/prospect";

import { renderMultiMessage } from "./render";

const meta: Meta<typeof MultiMessage> = {
  component: MultiMessage,
  title: "Components/MultiMessage",
  parameters: {
    layout: "centered fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MultiMessage>;

export const Playground: Story = {
  name: "MultiMessage",
  render: renderMultiMessage,
  args: {
    defaultActiveIndex: 0,
  },
};
