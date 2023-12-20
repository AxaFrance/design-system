import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const MODIFIERS = [
  "success",
  "info",
  "danger",
  "reverse",
  "disabled",
  "small",
  "hasiconLeft",
  "hasiconRight",
];

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Button>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  name: "Button",
  render: ({ children: text, classModifier, onClick, ...args }) => (
    <Button classModifier={classModifier.join(" ")} onClick={onClick} {...args}>
      {text}
    </Button>
  ),
  args: {
    children: "Button",
    classModifier: [] as string[],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
};

export const Reverse: StoryObj<typeof Button> = {
  name: "Button reverse",
  args: {
    children: "Button Reverse",
    classModifier: "reverse",
  },
};

export const Success: StoryObj<typeof Button> = {
  name: "Button success",
  args: {
    children: "Button Danger",
    classModifier: "success",
  },
};

export const Danger: StoryObj<typeof Button> = {
  name: "Button danger",
  args: {
    children: "Button Danger",
    classModifier: "danger",
  },
};

export const Small: StoryObj<typeof Button> = {
  name: "Button small",
  args: {
    children: "Button Small",
    classModifier: "small",
  },
};
