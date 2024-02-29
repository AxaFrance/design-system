import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Action } from "./Action";

const meta: Meta<typeof Action> = {
  title: "Agent/Components/Action",
  component: Action,
};
export default meta;

export const Default: StoryObj<typeof Action> = {
  name: "Action Link",
  render: ({ ...args }) => <Action {...args} />,
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "id",
  },
};

export const Button: StoryObj<typeof Action> = {
  name: "Action Button",
  render: ({ onClick, ...args }) => <Action onClick={onClick} {...args} />,
  args: {
    id: "id",
    icon: "floppy-disk",
    onClick: () => action("clicked"),
    role: "button",
    title: "Enregistrer",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};
