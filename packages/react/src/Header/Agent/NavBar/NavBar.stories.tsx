import { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "./NavBar";
import { NavBarItem } from "./NavBarItem";

const meta: Meta<typeof NavBar> = {
  title: "Agent/Components/Header/Navigation/NavigationBar",
  component: NavBar,
};

export default meta;

export const Default: StoryObj<typeof NavBar> = {
  args: {
    children: [
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/home">
            Home
          </a>
        }
        key="NavBarItem-1"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/table">
            Table
          </a>
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
            <a className="af-nav__link" href="/table-1">
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a className="af-nav__link" href="/table-2">
              Sous lien 2
            </a>
          }
        />
      </NavBarItem>,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/accordion">
            Accordion
          </a>
        }
        key="NavBarItem-3"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/doc">
            Doc
          </a>
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
            <a className="af-nav__link" href="/doc-1">
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="doc-2"
          actionElt={
            <a className="af-nav__link" href="/doc-2">
              Sous lien 2
            </a>
          }
        />
      </NavBarItem>,
    ],
    id: "mainmenu",
    isVisible: true,
    positionInit: 0,
    toggleMenuId: "togglemenu",
  },
};
