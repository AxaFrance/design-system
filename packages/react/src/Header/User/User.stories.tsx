import { Args, Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { User } from "./User";

const meta: Meta<typeof User> = {
  component: User,
  title: "Components/Header/User",
  args: {
    name: "Pierre Martin",
    profile: "profile",
  },
  argTypes: {
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
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    href: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    name: {
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
    path: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    profile: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    title: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "Voir mon profil" },
      },
    },
  },
  render: (args: Partial<Args>) => <User name={args.name} {...args} />,
};

export default meta;

type UserProps = ComponentProps<typeof User>;

export const UserWithLink: StoryObj<UserProps> = {
  name: "User With Link",
  args: {
    href: "/#",
  },
};

export const UserWithoutLink: StoryObj<UserProps> = {
  name: "User Without link",
};
