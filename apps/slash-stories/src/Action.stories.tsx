import { Action } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/Action",
  component: Action,
  args: {
    onClick: fn(),
  },
});

export const Default = meta.story({
  name: "Action Link",
  render: ({ ...args }) => <Action {...args} />,
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "id",
  },
});

export const Button = meta.story({
  name: "Action Button",
  render: ({ onClick, ...args }) => <Action onClick={onClick} {...args} />,
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "id",
  },
});
