import { Meta, StoryObj } from "@storybook/react";
import { AllHTMLAttributes, Component, ComponentProps } from "react";
import { HandlerFunction, action } from "@storybook/addon-actions";
import { NavBarItem } from "./NavBarItem";

const meta: Meta<typeof NavBarItem> = {
  title: "Components/Header/Navigation/NavigationBarItem",
  component: NavBarItem,
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
        defaultValue: { summary: "af-nav__item" },
      },
    },
    hasFocus: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    actionElt: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    role: {
      control: "text",
      table: {
        type: { summary: "function" },
        defaultValue: { summary: "menuitem" },
      },
    },
    ariaLabel: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "" },
      },
    },
    tabIndex: {
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: -1 },
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

type NavBarItemProps = ComponentProps<typeof NavBarItem>;

export const Default: StoryObj<NavBarItemProps> = {
  render: (args) => (
    <ul style={{ listStyle: "none" }}>
      <NavBarItem {...args} />
    </ul>
  ),
  args: {
    actionElt: (
      <LinkItem className="af-nav__link" href="/home">
        HomeLINK
      </LinkItem>
    ),
    style: { width: "100px" },
  },
};

export const ActifNavBarItem: StoryObj<NavBarItemProps> = {
  name: "Active Navigation Bar Item",
  render: (args) => (
    <ul style={{ listStyle: "none" }}>
      <NavBarItem {...args} />
    </ul>
  ),
  args: {
    actionElt: (
      <a className="af-nav__link" href="/home">
        Home
      </a>
    ),
    classModifier: "active",
    style: { width: "100px" },
  },
};

export const ActiveNavBarItemWithChildren: StoryObj<NavBarItemProps> = {
  name: "Active Navigation Bar Item With Children",
  render: ({ children, ...args }) => (
    <ul style={{ listStyle: "none" }}>
      <NavBarItem {...args} aria-expanded="false" aria-haspopup="true">
        {children}
      </NavBarItem>
    </ul>
  ),
  args: {
    actionElt: (
      <a className="af-nav__link" href="/doc">
        Doc
      </a>
    ),
    ariaLabel: "Table",
    classModifier: "active",
    className: "af-nav__item--haschild af-nav__item af-nav__item--open",
    style: { width: "100px" },
    children: (
      <>
        <NavBarItem
          key="doc-1"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien">
              Sous lien
            </a>
          }
        />
        <NavBarItem
          key="doc-2"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien2">
              Sous lien2
            </a>
          }
        />
        <NavBarItem
          key="doc-3"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien3">
              Sous lien3
            </a>
          }
        />
        <NavBarItem
          key="doc-4"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien4">
              Sous lien4
            </a>
          }
        />
      </>
    ),
  },
};
