import {
  ClickItem,
  createClickItemParent,
  List,
  Svg,
} from "@axa-fr/design-system-look-and-feel-react";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClickItem> = {
  title: "Components/List/ClickItem",
  component: ClickItem,
  argTypes: {
    onClick: { action: "onClick" },
  },
};
export default meta;

export const ClickItemWithIcons: StoryObj<typeof ClickItem> = {
  name: "ClickItem with icon",
  render: (args) => <ClickItem {...args} />,
  args: {
    icon: <Svg src={error} aria-hidden />,
    children: "Texte principal",
    classModifier: "small",
    actionIcon: <Svg src={openInNew} aria-hidden />,
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickItemWithoutIcon: StoryObj<typeof ClickItem> = {
  name: "ClickItem without icon",
  render: (args) => <ClickItem {...args} />,
  args: {
    children: (
      <>
        <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
        <p className="af-click-item__subtitle">30 novembre 2021</p>
        <p className="af-click-item__secondary">Signé électroniquement</p>
      </>
    ),
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickItemLinkWithoutIcon: StoryObj<typeof ClickItem> = {
  name: "ClickItem link without icon",
  render: (args) => <ClickItem {...args} />,
  args: {
    children: (
      <>
        <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
        <p className="af-click-item__subtitle">30 novembre 2021</p>
        <p className="af-click-item__secondary">Signé électroniquement</p>
      </>
    ),
    parentClickComponent: createClickItemParent("a", {
      href: "https://github.com/AxaFrance/design-system",
      target: "_blank",
      rel: "noreferrer",
    }),
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickItemList: StoryObj<typeof ClickItem> = {
  name: "ClickItem list",
  render: ({ items }) => (
    <List classModifier="click-list">
      {items.map((props) => (
        <ClickItem key={props.id} {...props} />
      ))}
    </List>
  ),
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
        classModifier: "small",
        actionIcon: <Svg src={openInNew} aria-hidden />,
        disabled: true,
      },
      {
        id: "3",
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
    ],
  },
};
