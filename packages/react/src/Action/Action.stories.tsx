import { Args, Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Action } from "./Action";

const meta: Meta<typeof Action> = {
  component: Action,
  title: "Components/Action",
  args: {
    href: "http://axafrance.github.io",
    id: "id",
    target: "_blank",
  },
  argTypes: {
    icon: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    href: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    tabIndex: {
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
    classModifier: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    className: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    role: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    onClick: {
      action: "clicked",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
  },
  render: (args: Partial<Args>) => <Action icon={args.icon} {...args} />,
};

export default meta;

type ActionProps = ComponentProps<typeof Action>;

export const ActionLink: StoryObj<ActionProps> = {
  name: "Action Link",
  args: {
    icon: "link",
    title: "Rediriger",
  },
};

export const ActionButton: StoryObj<ActionProps> = {
  name: "Action Button",
  render: (args) => <Action {...args} />,
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    classModifier: "axa",
  },
};
