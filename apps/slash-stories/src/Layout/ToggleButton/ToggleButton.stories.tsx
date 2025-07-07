import { Action, ToggleButton } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "Components/Header/ToggleButton",
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
