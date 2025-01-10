import trashIcon from "@material-symbols/svg-400/outlined/delete.svg";
import publishedWithChangesIcon from "@material-symbols/svg-400/outlined/published_with_changes-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Svg } from "../Svg";
import { ClickItem } from "./ClickList";
import { ContentItemMono } from "./ContentItemMono";
import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
};
export default meta;

export const Default: StoryObj<
  Omit<ComponentProps<typeof List>, "classModifier"> & {
    classModifier: string[];
  }
> = {
  name: "List",
  render: ({ classModifier, ...args }) => (
    <List classModifier={classModifier.join(" ")} {...args} />
  ),
  args: {
    children: [
      <ContentItemMono key={0} secondaryText="nom.prénom@mail.fr">
        Prénom NOM
      </ContentItemMono>,
      <ClickItem key={1} icon={<Svg src={publishedWithChangesIcon} />}>
        Modifier le profil
      </ClickItem>,
      <ClickItem key={2} icon={<Svg src={trashIcon} />}>
        Supprimer le profil
      </ClickItem>,
    ],
    classModifier: ["first-separator-full-width"],
  },
  argTypes: {
    classModifier: {
      options: ["large", "extra-padding", "first-separator-full-width"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
