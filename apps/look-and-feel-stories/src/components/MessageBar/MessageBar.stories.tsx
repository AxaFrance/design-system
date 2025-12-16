import type { Meta, StoryObj } from "@storybook/react";

import {
  MessageBar,
  messageBarVariants,
  type MessageBarVariants,
} from "@axa-fr/canopee-react/client";

import { renderMessageBar, renderMessageBarAll } from "./render";

import "./MessageBar.story.scss";

const meta: Meta<typeof MessageBar> = {
  component: MessageBar,
  title: "Components/MessageBar",
  parameters: {
    layout: "centered fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof MessageBar>,
  "children" | "variant"
> & {
  children: string;
  variant: MessageBarVariants;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "MessageBar",
  render: renderMessageBar,
  args: {
    children: "MessageBar",
  },
  argTypes: {
    variant: {
      options: Object.values(messageBarVariants),
      control: { type: "select" },
    },
  },
};

export const All: StoryObj<typeof MessageBar> = {
  render: renderMessageBarAll,
};
