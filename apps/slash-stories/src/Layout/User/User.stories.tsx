import { User } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof User> = {
  args: {
    name: "Pierre Martin",
    profile: "profile",
    title: "Voir mon profil",
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
  component: User,
  title: "Components/Header/User",
};

export default meta;

export const UserWithLink: StoryObj<typeof User> = {
  args: {
    href: "/#",
  },
};

export const UserWithoutLink: StoryObj<typeof User> = {
  name: "User Without link",
};
