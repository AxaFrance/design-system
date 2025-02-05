/* eslint-disable import/no-relative-packages */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { Button, buttonVariants, type ButtonVariants } from ".";
import { renderAll, render } from "../../../../common/react/src/Button/render";
import "../../../../common/css/src/Button/Button.stories.scss";

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
  render,
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
  },
};

export const All: StoryObj<typeof Button> = {
  render: renderAll,
};
