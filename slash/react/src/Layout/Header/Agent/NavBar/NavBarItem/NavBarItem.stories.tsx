import type { Meta, StoryObj } from "@storybook/react";
import { NavBarItem } from "..";

const meta: Meta<typeof NavBarItem> = {
  title: "Slash/Components/NavBar/NavBarItem",
  component: NavBarItem,
  args: {
    hasFocus: false,
  },
  argTypes: {
    onClick: { action: "onClick" },
    classModifier: {
      control: {
        type: "select",
        options: ["", "active"],
      },
    },
  },
};
export default meta;

type StoryProps = Omit<React.ComponentProps<typeof NavBarItem>, "onClick"> & {
  onClick: () => void;
};
type Story = StoryObj<StoryProps>;

const withPreventDefaultClick =
  <T extends React.MouseEvent>(next?: (e: T) => void): ((e: T) => void) =>
  (e: T) => {
    e.preventDefault();
    next?.(e);
  };

const template = ({ onClick, ...args }: StoryProps) => (
  <ul style={{ listStyle: "none" }}>
    <NavBarItem
      {...args}
      onClick={withPreventDefaultClick(onClick)}
      style={{
        width: "100px",
      }}
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
  </ul>
);

export const NavBarItemDefaultStory: Story = {
  name: "Default",
  render: template,
  args: { classModifier: "" },
};

export const ActiveNavBarItemStory: Story = {
  name: "Active",
  render: template,
  args: { classModifier: "active" },
};

export const NavBarItemWithChildrenStory: Story = {
  name: "Active with children",
  render: ({ onClick, ...args }) => (
    <div style={{ height: "300px" }}>
      <NavBarItem
        style={{ width: "100px" }}
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        className="af-nav__item--haschild af-nav__item af-nav__item--open"
        {...args}
        onClick={withPreventDefaultClick(onClick)}
        actionElt={
          <a className="af-nav__link" href="/doc">
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
              href="/doc/sous-lien2"
              onClick={withPreventDefaultClick(onClick)}
            >
              Sous lien2
            </a>
          }
        />
        <NavBarItem
          key="doc-3"
          actionElt={
            <a
              className="af-nav__link"
              href="/doc/sous-lien3"
              onClick={withPreventDefaultClick(onClick)}
            >
              Sous lien3
            </a>
          }
        />
        <NavBarItem
          key="doc-4"
          actionElt={
            <a
              className="af-nav__link"
              href="/doc/sous-lien4"
              onClick={withPreventDefaultClick(onClick)}
            >
              Sous lien4
            </a>
          }
        />
      </NavBarItem>
    </div>
  ),
  args: {
    classModifier: "",
  },
};
