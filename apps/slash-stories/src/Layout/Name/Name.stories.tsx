import logo from "@axa-fr/canopee-css/logo-axa.svg";
import { Name } from "@axa-fr/canopee-react/distributeur";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  component: Name,
  title: "Components/Header/Name",
});

export const Default = meta.story({
  args: {
    alt: "Logo React",
    img: logo,
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
});
