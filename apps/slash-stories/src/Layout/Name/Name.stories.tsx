import logo from "@axa-fr/canopee-css/logo-axa.svg";
import { Name } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";

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
