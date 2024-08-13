import contentPasteGo from "@material-symbols/svg-400/outlined/content_paste_go.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { Svg } from "../../Svg";
import { ClickList } from "./ClickList.client";

const meta: Meta<typeof ClickList> = {
  title: "Look-and-feel/Components/List/ClickList",
  component: ClickList,
};
export default meta;

export const ClickListWithIcon: StoryObj<typeof ClickList> = {
  name: "ClickList with icon",
  render: (args) => <ClickList {...args} />,
  args: {
    items: [
      {
        id: "report-claim",
        icon: <Svg src={error} />,
        label: "Déclarer un sinistre",
      },
      {
        id: "follow-claim",
        icon: <Svg src={contentPasteGo} />,
        label: "Suivre mes sinistres",
        disabled: true,
      },
    ],
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickListWithoutIcon: StoryObj<typeof ClickList> = {
  name: "ClickList without icon",
  render: (args) => <ClickList {...args} />,
  args: {
    items: [
      {
        label: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
      },
      {
        label: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
        disabled: true,
      },
    ],
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};
