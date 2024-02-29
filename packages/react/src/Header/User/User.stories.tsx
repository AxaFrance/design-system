import { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";

const meta: Meta<typeof User> = {
  args: {
    name: "Pierre Martin",
    profile: "profile",
    title: "Voir mon profil",
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
      action: "onClick",
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
      },
    },
  },
  component: User,
  title: "Agent/Components/Header/User",
};

export default meta;

export const UserWithLink: StoryObj<typeof User> = {
  name: "User With Link",
  args: {
    href: "/#",
  },
};

export const UserWithoutLink: StoryObj<typeof User> = {
  name: "User Without link",
};
