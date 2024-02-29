import { AllHTMLAttributes, Component, ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HandlerFunction, action } from "@storybook/addon-actions";
import "@axa-fr/design-system-css/dist/Header/NavBar/NavBar.scss";
import "@axa-fr/design-system-css/dist/Header/Drawer/Drawer.scss";

import { NavBar } from "./NavBar";
import { NavBarItem } from "./NavBarItem";

const meta: Meta<typeof NavBar> = {
  title: "Agent/Components/Header/Navigation/NavigationBar",
  component: NavBar,
};
export default meta;

const withPreventDefaultClick =
  (next: HandlerFunction) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    next(e);
  };

const LinkItem = ({
  children,
  ...props
}: ComponentProps<typeof Component<AllHTMLAttributes<HTMLAnchorElement>>>) => (
  <a href="/#" {...props} onClick={withPreventDefaultClick(action("clicked"))}>
    {children}
  </a>
);

export const Default: StoryObj<typeof NavBar> = {
  args: {
    children: [
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" href="/home">
            Home
          </LinkItem>
        }
        key="NavBarItem-1"
      />,
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" href="/table">
            Table
          </LinkItem>
        }
        aria-expanded="false"
        aria-haspopup="true"
        ariaLabel="Table"
        className="af-nav__item--haschild af-nav__item"
        key="NavBarItem-2"
      >
        <NavBarItem
          key="table-1"
          actionElt={
            <LinkItem className="af-nav__link" href="/table-1">
              Sous lien 1
            </LinkItem>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <LinkItem className="af-nav__link" href="/table-2">
              Sous lien 2
            </LinkItem>
          }
        />
      </NavBarItem>,
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" href="/accordion">
            Accordion
          </LinkItem>
        }
        key="NavBarItem-3"
      />,
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" href="/doc">
            Doc
          </LinkItem>
        }
        aria-expanded="false"
        aria-haspopup="true"
        ariaLabel="Table"
        key="NavBarItem-3"
        className="af-nav__item--haschild af-nav__item"
      >
        <NavBarItem
          key="doc-1"
          actionElt={
            <LinkItem className="af-nav__link" href="/doc-1">
              Sous lien 1
            </LinkItem>
          }
        />
        <NavBarItem
          key="doc-2"
          actionElt={
            <LinkItem className="af-nav__link" href="/doc-2">
              Sous lien 2
            </LinkItem>
          }
        />
      </NavBarItem>,
    ],
    id: "mainmenu",
    isVisible: true,
    positionInit: 0,
    toggleMenuId: "togglemenu",
  },
  argTypes: {
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    className: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    id: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    isVisible: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
    onClick: {
      action: "onClick",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    positionInit: {
      control: "number",
      table: {
        type: { summary: "number" },
      },
    },
    toggleMenuId: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
  },
};
