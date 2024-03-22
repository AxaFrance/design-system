import { Meta, StoryObj } from "@storybook/react";
import { Action } from "../../../../Action/Action";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "Agent/Components/Header/ToggleButton",
};

export default meta;

type StoryProps = React.ComponentProps<typeof ToggleButton> & {
  onClick: () => void;
};
type Story = StoryObj<StoryProps>;

const actionToggle = {
  icon: "menu-hamburger",
  title: "Toggle",
};

export const Default: Story = {
  args: {
    idControl: "mainmenu",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
  render: (args) => (
    <ToggleButton idControl={args.idControl}>
      <Action
        icon={actionToggle.icon}
        id="togglemenu"
        onClick={args.onClick}
        title={actionToggle.title}
      />
    </ToggleButton>
  ),
};
