import { Meta, StoryObj } from "@storybook/react";
import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import { Name } from "./Name";

const meta: Meta<typeof Name> = {
  component: Name,
  title: "Slash/Components/Header/Name",
};

export default meta;

export const Default: StoryObj<typeof Name> = {
  args: {
    alt: "Logo React",
    img: logo,
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};
