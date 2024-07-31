import arrow from "@material-symbols/svg-400/outlined/arrow_right.svg";
import trash from "@material-symbols/svg-400/outlined/delete.svg";
import sync from "@material-symbols/svg-400/outlined/sync-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Svg } from "../Svg";
import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "Client/Components/List",
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
      <div key="list-item-1">
        <span>Prénom NOM</span>
      </div>,
      <div key="list-item-2">
        <span>nom.prénom@mail.fr</span>
      </div>,
      <div
        key="list-item-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Svg src={sync} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>Modifier le profil</span>
          <Svg src={arrow} />
        </div>
      </div>,
      <div
        key="list-element-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Svg src={trash} />
          <span>Supprimer le profil</span>
        </div>
      </div>,
    ],
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large", "full-width-separators"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
