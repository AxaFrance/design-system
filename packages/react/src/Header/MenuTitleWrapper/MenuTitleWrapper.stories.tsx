import { Meta } from "@storybook/react";
import { useState } from "react";

import { HandlerFunction, action } from "@storybook/addon-actions";
import { NavBar } from "../NavBar/NavBar";
import { NavBarItem } from "../NavBar/NavBarItem";
import { Title } from "../Title/Title";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: "Agent/Components/Header/MenuTitleWrapper",
};

export default meta;

const withPreventDefaultClick =
  (next: HandlerFunction) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    next(e);
  };

export const Default = () => {
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
            <a
              className="af-nav__link"
              href="/home"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Home
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a
              className="af-nav__link"
              href="/forms"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Forms
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a
              className="af-nav__link"
              href="/fileupload"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Fileupload
            </a>
          }
        />
        <NavBarItem
          className="af-nav__item af-nav__item--haschild"
          aria-haspopup="true"
          aria-expanded="false"
          ariaLabel="Table"
          actionElt={
            <a
              className="af-nav__link"
              href="/table"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Table
            </a>
          }
        >
          <NavBarItem
            key="table-1"
            actionElt={
              <a
                className="af-nav__link"
                href="/table/sous-lien-1"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 1
              </a>
            }
          />
          <NavBarItem
            key="table-2"
            actionElt={
              <a
                className="af-nav__link"
                href="/table/sous-lien-2"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 2
              </a>
            }
          />
          <NavBarItem
            key="table-3"
            actionElt={
              <a
                className="af-nav__link"
                href="/table/sous-lien-3"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 3
              </a>
            }
          />
          <NavBarItem
            key="table-4"
            actionElt={
              <a
                className="af-nav__link"
                href="/table/sous-lien-4"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 4
              </a>
            }
          />
        </NavBarItem>
        <NavBarItem
          actionElt={
            <a
              className="af-nav__link"
              href="/accordions"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Accordions
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a
              className="af-nav__link"
              href="/alerts"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Alerts
            </a>
          }
        />
        <NavBarItem
          actionElt={
            <a
              className="af-nav__link"
              href="/validation"
              onClick={withPreventDefaultClick(action("clicked"))}
            >
              Validation
            </a>
          }
        />
        <NavBarItem
          className="af-nav__item af-nav__item--haschild"
          aria-haspopup="true"
          aria-expanded="false"
          ariaLabel="Table"
          actionElt={
            <a
              className="af-nav__link"
              href="/doc"
              onClick={withPreventDefaultClick(action("clicked"))}
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
                href="/doc/sous-lien-1"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 1
              </a>
            }
          />
          <NavBarItem
            key="doc-2"
            actionElt={
              <a
                className="af-nav__link"
                href="/doc/sous-lien-2"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 2
              </a>
            }
          />
          <NavBarItem
            key="doc-3"
            actionElt={
              <a
                className="af-nav__link"
                href="/doc/sous-lien-3"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 3
              </a>
            }
          />
          <NavBarItem
            key="doc-4"
            actionElt={
              <a
                className="af-nav__link"
                href="/doc/sous-lien-4"
                onClick={withPreventDefaultClick(action("clicked"))}
              >
                Sous lien 4
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
