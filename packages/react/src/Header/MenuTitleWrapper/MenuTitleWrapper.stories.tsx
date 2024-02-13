import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { NavBarItem } from "../NavBar/NavBarItem";
import { Title } from "../Title/Title";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: "Components/Header/MenuTitleWrapper",
};

export default meta;

const MenuTitleWrapper = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    const { body } = document;
    body.classList.toggle("af-menu-open");
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <NavBar isVisible={isMenuVisible} onClick={handleClick}>
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/home">
              Home
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/forms">
              Forms
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/fileupload">
              Fileupload
            </a>
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
              <a className="af-nav__link" href="/table/sous-lien">
                Sous lien
              </a>
            }
          />
          <NavBarItem
            key="table-2"
            actionElt={
              <a className="af-nav__link" href="/table/sous-lien2">
                Sous lien2
              </a>
            }
          />
          <NavBarItem
            key="table-3"
            actionElt={
              <a className="af-nav__link" href="/table/sous-lien3">
                Sous lien3
              </a>
            }
          />
          <NavBarItem
            key="table-4"
            actionElt={
              <a className="af-nav__link" href="/table/sous-lien4">
                Sous lien4
              </a>
            }
          />
        </NavBarItem>
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/collapse">
              Accordions
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/alert">
              Alerts
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/validation">
              Validation
            </a>
          }
        />
        <NavBarItem
          className="af-nav__item--haschild af-nav__item"
          aria-haspopup="true"
          aria-expanded="false"
          ariaLabel="Table"
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
      </NavBar>
      <Title
        title="Toolkit Axa"
        subtitle="Sous titre"
        toggleMenu={handleClick}
      />
    </div>
  );
};

export const Default: StoryObj<ComponentProps<typeof NavBar>> = {
  render: () => <MenuTitleWrapper />,
};
