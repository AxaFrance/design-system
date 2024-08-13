import { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "../NavBar/NavBar";
import { NavBarItem } from "../NavBar/NavBarItem";
import { MenuTitleWrapper } from "./MenuTitleWrapper";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: "Slash/Components/Header/MenuTitleWrapper",
};

export default meta;

export const Default: StoryObj<typeof MenuTitleWrapper> = {
  args: {
    children: [
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/#">
            Home
          </a>
        }
        key="home"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/forms">
            Forms
          </a>
        }
        key="forms"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/fileupload">
            Fileupload
          </a>
        }
        key="fileupload"
      />,
      <NavBarItem
        className="af-nav__item af-nav__item--haschild"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={
          <a className="af-nav__link" href="/table">
            Table
          </a>
        }
        key="table"
      >
        <NavBarItem
          key="table-1"
          actionElt={
            <a className="af-nav__link" href="/table/sous-lien-1">
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a className="af-nav__link" href="/table/sous-lien-2">
              Sous lien 2
            </a>
          }
        />
        <NavBarItem
          key="table-3"
          actionElt={
            <a className="af-nav__link" href="/table/sous-lien-3">
              Sous lien 3
            </a>
          }
        />
        <NavBarItem
          key="table-4"
          actionElt={
            <a className="af-nav__link" href="/table/sous-lien-4">
              Sous lien 4
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
        key="accordions"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/alerts">
            Alerts
          </a>
        }
        key="alerts"
      />,
      <NavBarItem
        actionElt={
          <a className="af-nav__link" href="/validation">
            Validation
          </a>
        }
        key="validation"
      />,
      <NavBarItem
        className="af-nav__item af-nav__item--haschild"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={
          <a className="af-nav__link" href="/doc">
            Doc
          </a>
        }
        key="doc"
      >
        <NavBarItem
          key="doc-1"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien-1">
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="doc-2"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien-2">
              Sous lien 2
            </a>
          }
        />
        <NavBarItem
          key="doc-3"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien-3">
              Sous lien 3
            </a>
          }
        />
        <NavBarItem
          key="doc-4"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien-4">
              Sous lien 4
            </a>
          }
        />
      </NavBarItem>,
    ],
    menuVisible: false,
    subtitle: "Sous titre",
    title: "Toolkit Axa",
  },
};
