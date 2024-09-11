import download from "@material-symbols/svg-400/rounded/download_2-fill.svg";
import visibility from "@material-symbols/svg-400/rounded/visibility-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { ButtonVariants, Svg } from "../..";
import { ContentTabList } from "./ContentTabList";

const meta: Meta<typeof ContentTabList> = {
  title: "Components/List/ContentTabList",
  component: ContentTabList,
};
export default meta;

const template = (args: ComponentProps<typeof ContentTabList>) => (
  <ContentTabList {...args} />
);

export const ContentTabListWithButtons: StoryObj<
  ComponentProps<typeof ContentTabList>
> = {
  name: "ContentTabList with buttons",
  render: template,
  args: {
    items: [
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        tag: "En attente",
        date: "01/01/2024",
        buttons: [
          {
            id: "download_button",
            children: "Télécharger",
            variant: ButtonVariants.ghost,
            iconLeft: <Svg src={download} />,
            onClick: () => {},
          },
        ],
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        buttons: [
          {
            id: "download_button",
            children: "Télécharger",
            variant: ButtonVariants.ghost,
            iconLeft: <Svg src={download} />,
            onClick: () => {},
          },
          {
            id: "display_button",
            children: "Afficher",
            variant: ButtonVariants.ghost,
            iconLeft: <Svg src={visibility} />,
            onClick: () => {},
          },
        ],
      },
    ],
    classModifier: "",
  },
};

export const ContentTabListWithValue: StoryObj<
  ComponentProps<typeof ContentTabList>
> = {
  name: "ContentTabList with value",
  render: template,
  args: {
    items: [
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        date: "01/01/2024",
        value: "+ 11,86 €",
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        value: "+ 11,86 €",
      },
    ],
  },
};
