import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { NavBar, NavBarItem } from ".";

const meta: Meta<typeof NavBar> = {
  title: "Slash/Components/NavBar",
  component: NavBar,
  argTypes: {
    onClick: { action: "onClick" },
    positionInit: { control: { type: "number", min: 0, max: 3 } },
  },
};
export default meta;

type StoryProps = React.ComponentProps<typeof NavBar>;
type Story = StoryObj<StoryProps>;

const withPreventDefaultClick =
  <T extends React.MouseEvent>(next?: (e: T) => void): ((e: T) => void) =>
  (e: T) => {
    e.preventDefault();
    next?.(e);
  };

const template = ({ children, onClick, ...args }: StoryProps) => (
  <NavBar onClick={withPreventDefaultClick(onClick)} {...args}>
    <NavBarItem
      actionElt={
        <a
          className="af-nav__link"
          href="/home"
          onClick={withPreventDefaultClick(onClick)}
        >
          Home
        </a>
      }
    />
    {children}
    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={<span className="af-nav__link">Table</span>}
    >
      <NavBarItem
        key="table-1"
        actionElt={
          <a
            className="af-nav__link"
            href="/table/sous-lien"
            onClick={withPreventDefaultClick(onClick)}
          >
            Sous lien
          </a>
        }
      />
      <NavBarItem
        key="table-2"
        actionElt={
          <a
            className="af-nav__link"
            href="/table/sous-lien-2"
            onClick={withPreventDefaultClick(onClick)}
          >
            Sous lien 2
          </a>
        }
      />
    </NavBarItem>
    <NavBarItem
      actionElt={
        <a
          className="af-nav__link"
          href="/collapse"
          onClick={withPreventDefaultClick(onClick)}
        >
          Accordions
        </a>
      }
    />
    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={
        <a
          className="af-nav__link"
          href="/doc"
          onClick={withPreventDefaultClick(onClick)}
        >
          Doc
        </a>
      }
    >
      <NavBarItem
        key="doc-1"
        actionElt={
          <a
            className="af-nav__link"
            href="/doc/sous-lien"
            onClick={withPreventDefaultClick(onClick)}
          >
            Sous lien
          </a>
        }
      />
      <NavBarItem
        key="doc-2"
        actionElt={
          <a
            className="af-nav__link"
            href="/doc/sous-lien-2"
            onClick={withPreventDefaultClick(onClick)}
          >
            Sous lien 2
          </a>
        }
      />
    </NavBarItem>
  </NavBar>
);

export const NavBarBaseStory: Story = {
  name: "NavBarBase",
  render: template,
  args: { positionInit: 2 },
};

export const NavBarBaseWithCustomableChildrenStory: Story = {
  name: "NavBarBase with customable children",
  render: template,
  args: {
    positionInit: 2,
    children: (
      <NavBarItem
        key={1}
        actionElt={
          <a
            className="af-nav__link"
            href="/forms"
            onClick={withPreventDefaultClick()}
          >
            Forms
          </a>
        }
      />
    ),
  },
  argTypes: {
    positionInit: { control: { type: "number", min: 0, max: 4 } },
  },
};
