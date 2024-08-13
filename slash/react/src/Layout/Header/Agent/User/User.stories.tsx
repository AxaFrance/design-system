import { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";

const meta: Meta<typeof User> = {
  args: {
    name: "Pierre Martin",
    profile: "profile",
    title: "Voir mon profil",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
  component: User,
  title: "Slash/Components/Header/User",
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
