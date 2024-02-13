import { Meta, StoryObj } from "@storybook/react";
import { AllHTMLAttributes, Component, ComponentProps } from "react";
import { HandlerFunction, action } from "@storybook/addon-actions";
import { NavBar } from "./NavBar";
import { NavBarItem } from "./NavBarItem";

const meta: Meta<typeof NavBar> = {
  title: "Components/Header/Navigation/NavigationBar",
  component: NavBar,
  args: {
    isVisible: true,
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
        defaultValue: { summary: "mainmenu" },
      },
    },
    isVisible: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    onClick: {
      action: "clicked",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    positionInit: {
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
    toggleMenuId: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "togglemenu" },
      },
    },
  },
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
  <a
    href="/#"
    {...props}
    onClick={withPreventDefaultClick(action("click action"))}
  >
    {children}
  </a>
);

type NavBarProps = ComponentProps<typeof NavBar>;

export const Default: StoryObj<NavBarProps> = {
  render: ({ children, ...args }) => <NavBar {...args}>{children}</NavBar>,
  args: {
    children: (
      <>
        <NavBarItem
          actionElt={
            <LinkItem className="af-nav__link" href="/home">
              Home
            </LinkItem>
          }
        />
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
              <LinkItem className="af-nav__link" href="/#">
                Sous lien
              </LinkItem>
            }
          />
          <NavBarItem
            key="table-2"
            actionElt={
              <LinkItem className="af-nav__link" href="/#">
                Sous lien2
              </LinkItem>
            }
          />
        </NavBarItem>
        <NavBarItem
          actionElt={
            <LinkItem className="af-nav__link" href="/#">
              Accordions
            </LinkItem>
          }
        />
        <NavBarItem
          className="af-nav__item--haschild af-nav__item"
          aria-haspopup="true"
          aria-expanded="false"
          ariaLabel="Table"
          actionElt={
            <LinkItem className="af-nav__link" href="/#">
              Doc
            </LinkItem>
          }
        >
          <NavBarItem
            key="doc-1"
            actionElt={
              <LinkItem className="af-nav__link" href="/#">
                Sous lien
              </LinkItem>
            }
          />
          <NavBarItem
            key="doc-2"
            actionElt={
              <LinkItem className="af-nav__link" href="/#">
                Sous lien2
              </LinkItem>
            }
          />
        </NavBarItem>
      </>
    ),
    positionInit: 2,
  },
};
