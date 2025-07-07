import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
import { Name } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Name> = {
  component: Name,
  title: "Components/Header/Name",
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
