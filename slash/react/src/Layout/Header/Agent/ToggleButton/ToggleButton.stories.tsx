import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Action } from "../../../../Action/Action";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "Slash/Components/Header/ToggleButton",
};

export default meta;

const actionToggle = {
  icon: "menu-hamburger",
  title: "Toggle",
};

export const Default: StoryObj<ComponentProps<typeof ToggleButton>> = {
  args: {
    children: (
      <Action
        icon={actionToggle.icon}
        id="togglemenu"
        onClick={() => {}}
        title={actionToggle.title}
      />
    ),
    idControl: "mainmenu",
  },
  render: (args) => (
    <ToggleButton idControl={args.idControl}>{args.children}</ToggleButton>
  ),
};
