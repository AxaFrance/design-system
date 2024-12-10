import contentPasteGo from "@material-symbols/svg-400/outlined/content_paste_go.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { Svg } from "../../Svg";
import { createClickItemParent } from "./ClickItem";
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
        id: "1",
        icon: <Svg src={error} aria-hidden />,
        children: "Texte principal",
        classModifier: "small",
        actionIcon: <Svg src={openInNew} aria-hidden />,
      },
      {
        id: "2",
        icon: <Svg src={error} aria-hidden />,
        children: "Texte principal",
      },
      {
        id: "3",
        icon: <Svg src={error} aria-hidden />,
        children: "Texte principal",
        classModifier: "large",
      },
      {
        id: "4",
        icon: <Svg src={contentPasteGo} aria-hidden />,
        children: "Texte principal",
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
        children: (
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
        children: (
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
        children: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
        parentClickComponent: createClickItemParent("a", {
          href: "https://github.com/AxaFrance/design-system",
          target: "_blank",
          rel: "noreferrer",
        }),
      },
      {
        id: "2",
        children: (
          <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
        ),
        parentClickComponent: createClickItemParent("a", {
          href: "https://github.com/AxaFrance/design-system",
          target: "_blank",
          rel: "noreferrer",
        }),
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
