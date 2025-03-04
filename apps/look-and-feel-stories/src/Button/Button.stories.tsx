import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import {
  renderButton as render,
  renderButtonAll as renderAll,
} from "@axa-fr/design-system-common-client-react";

import {
  Button,
  buttonVariants,
  type ButtonVariants,
} from "@axa-fr/design-system-look-and-feel-react";

import "@axa-fr/design-system-common-client-css/Button/Button.story.scss";

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
