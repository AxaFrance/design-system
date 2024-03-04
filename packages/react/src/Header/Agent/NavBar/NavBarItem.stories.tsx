import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { NavBarItem } from "./NavBarItem";

const MODIFIERS = ["active", "open"];

const meta: Meta<typeof NavBarItem> = {
  args: {
    ariaLabel: "",
    className: "af-nav__item",
    hasFocus: false,
    role: "menuitem",
    tabIndex: -1,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "",
    },
  },
  component: NavBarItem,
  title: "Agent/Components/Header/Navigation/NavigationBarItem",
};

export default meta;

type NavBarItemProps = ComponentProps<typeof NavBarItem>;

export const Default: StoryObj<NavBarItemProps> = {
  render: ({ children, ...args }) => (
    <ul style={{ listStyle: "none" }}>
      <NavBarItem {...args}>{children}</NavBarItem>
    </ul>
  ),
  args: {
    actionElt: (
      <a className="af-nav__link" href="/home">
        Home
      </a>
    ),
    children: [
      <NavBarItem
        key="doc-1"
        actionElt={
          <a className="af-nav__link" href="/doc/sous-lien-1">
            Sous lien 1
          </a>
        }
      />,
      <NavBarItem
        key="doc-2"
        actionElt={
          <a className="af-nav__link" href="/doc/sous-lien-2">
            Sous lien 2
          </a>
        }
      />,
      <NavBarItem
        key="doc-3"
        actionElt={
          <a className="af-nav__link" href="/doc/sous-lien-3">
            Sous lien 3
          </a>
        }
      />,
      <NavBarItem
        key="doc-4"
        actionElt={
          <a className="af-nav__link" href="/doc/sous-lien-4">
            Sous lien 4
          </a>
        }
      />,
    ],
    style: { width: "100px" },
  },
};
