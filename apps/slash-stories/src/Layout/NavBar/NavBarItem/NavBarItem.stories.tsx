import { NavBarItem } from "@axa-fr/canopee-react/distributeur";
import preview from "../../../../.storybook/preview";

type NavBarItemProps = React.ComponentProps<typeof NavBarItem>;

const defaultActionElt = (
  <a className="af-nav__link" href="/home">
    Home
  </a>
);

const meta = preview.meta({
  title: "Components/NavBar/NavBarItem",
  component: NavBarItem,
  args: {
    hasFocus: false,
    actionElt: defaultActionElt,
  },
});
export default meta;

const Template = (args: NavBarItemProps) => (
  <ul style={{ listStyle: "none" }}>
    <NavBarItem
      {...args}
      style={{
        width: "100px",
      }}
    />
  </ul>
);

export const NavBarItemDefaultStory = meta.story({
  name: "Default",
  render: Template,
});

export const ActiveNavBarItemStory = meta.story({
  name: "Active",
  render: Template,
  args: { active: true },
});

export const NavBarItemWithChildrenStory = meta.story({
  name: "Active with children",
  render: (args) => (
    <div style={{ height: "300px" }}>
      <NavBarItem
        style={{ width: "100px" }}
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        className="af-nav__item--haschild af-nav__item af-nav__item--open"
        {...args}
        actionElt={
          <a className="af-nav__link" href="/doc">
            Doc
          </a>
        }
      >
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
      </NavBarItem>
    </div>
  ),
  args: {
    className: "",
  },
});
