import { Args, Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Action } from "../../Action/Action";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "Components/Header/ToggleButton",
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof ToggleButton>> = {
  render: ({ children, ...args }: Partial<Args>) => (
    <ToggleButton idControl={args.idControl}>{children}</ToggleButton>
  ),
  args: {
    idControl: "mainmenu",
    children: <Action id="togglemenu" icon="menu-hamburger" title="Toggle" />,
  },
  argTypes: {
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    idControl: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
  },
};
