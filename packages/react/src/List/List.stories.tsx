import { Meta, StoryObj } from "@storybook/react";
import trash from "@material-symbols/svg-400/outlined/delete.svg";
import sync from "@material-symbols/svg-400/outlined/sync-fill.svg";
import arrow from "@material-symbols/svg-400/outlined/arrow_right.svg";
import { List } from "./List";
import { Svg } from "../Svg";

const meta: Meta<typeof List> = {
  title: "Client/Components/List",
  component: List,
};
export default meta;

export const Default: StoryObj<typeof List> = {
  name: "List",
  render: (args) => <List {...args} />,
  args: {
    children: [
      <div key="list-item-1">
        <span>Prénom NOM</span>
      </div>,
      <div key="list-item-2">
        <span>npm.prénom@mail.fr</span>
      </div>,
      <div
        key="list-item-3"
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
          <Svg src={sync} />
          <span>Modifier le profil</span>
        </div>
        <Svg src={arrow} />
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
  },
};
