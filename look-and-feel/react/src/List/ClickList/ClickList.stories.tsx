import contentPasteGo from "@material-symbols/svg-400/outlined/content_paste_go.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { Svg } from "../../Svg";
import { ClickList } from "./ClickList";

const meta: Meta<typeof ClickList> = {
  title: "Components/List/ClickList",
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
        isDisabled: true,
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
        id: "1",
        label: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
      },
      {
        id: "2",
        label: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
        isDisabled: true,
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

export const ClickListLinkWithoutIcon: StoryObj<typeof ClickList> = {
  name: "ClickList link without icon",
  render: (args) => <ClickList {...args} />,
  args: {
    items: [
      {
        id: "1",
        label: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
      },
      {
        id: "2",
        label: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
        isDisabled: true,
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
