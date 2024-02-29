import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Action } from "../../Action/Action";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "Agent/Components/Header/ToggleButton",
};

export default meta;

const actionToggle = {
  icon: "menu-hamburger",
  title: "Toggle",
};

export const Default: StoryObj<ComponentProps<typeof ToggleButton>> = {
  args: {
    idControl: "mainmenu",
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
  render: (args) => (
    <ToggleButton idControl={args.idControl}>
      <Action
        icon={actionToggle.icon}
        id="togglemenu"
        title={actionToggle.title}
        {...args}
      />
    </ToggleButton>
  ),
};
