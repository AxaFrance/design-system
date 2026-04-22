import { User } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
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
});
export default meta;

export const UserWithLink = meta.story({
  args: {
    href: "/#",
  },
});

export const UserWithoutLink = meta.story({
  name: "User Without link",
});
