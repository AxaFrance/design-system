import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";

import {
  Button,
  buttonVariants,
  type ButtonVariants,
} from "@axa-fr/design-system-apollo-react";

import { renderButton, renderButtonAll } from "./render";

import "./Button.story.scss";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Button>,
  "children" | "variant" | "disabled" | "iconLeft" | "iconRight"
> & {
  children: string;
  variant: ButtonVariants;
  disabled: boolean;
  iconLeft: ReactNode;
  iconRight: ReactNode;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Button",
  render: renderButton,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: Object.values(buttonVariants),
      control: { type: "multi-select" },
    },
    iconLeft: {
      control: { type: "text" },
    },
    iconRight: {
      control: { type: "text" },
    },
    onClick: { action: "onClick" },
  },
};

export const All: StoryObj<typeof Button> = {
  render: renderButtonAll,
  argTypes: {
    onClick: { action: "onClick" },
  },
};
