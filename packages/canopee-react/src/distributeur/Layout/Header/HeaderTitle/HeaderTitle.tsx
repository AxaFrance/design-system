import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import "@axa-fr/canopee-css/distributeur/Layout/Header/HeaderTitle/HeaderTitle.css";
import type { ReactNode } from "react";

import classNames from "classnames";
import { getClassName } from "../../../utilities";
import {
  AnchorNavBar,
  type AnchorNavBarItem,
} from "../AnchorNavBar/AnchorNavBar";

const defaultClassName = "af-title-bar";

type Props = {
  children?: ReactNode;
  className?: string;
  isSticky?: boolean;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  subtitle?: string;
  title: string;
  toggleMenu?: () => void;
  /**
   * Whether the menu opened by the toggle is open, exposed by aria-expanded.
   * When set, the toggle also points to the NavBar ("mainmenu") with aria-controls.
   */
  isMenuOpen?: boolean;
  /** Accessible name of the menu toggle */
  toggleMenuLabel?: string;
  anchorNavBarItems?: AnchorNavBarItem[];
};

const HeaderTitle = ({
  children,
  className,
  isSticky = true,
  contentLeft,
  contentRight,
  subtitle,
  title,
  toggleMenu,
  isMenuOpen,
  toggleMenuLabel = "Menu principal",
  anchorNavBarItems,
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: defaultClassName,
    modifiers: [isSticky && "sticky"],
    className,
  });

  const isAnchorNavBarPresent =
    anchorNavBarItems && anchorNavBarItems.length > 0;

  return (
    <>
      <div className={classNames("af-container", componentClassName)}>
        {Boolean(toggleMenu) && (
          <div className="burger-container">
            <button
              type="button"
              className="btn af-btn--circle af-title-bar__mobile-menu"
              id="togglemenu"
              aria-controls={isMenuOpen === undefined ? undefined : "mainmenu"}
              aria-expanded={isMenuOpen}
              aria-label={toggleMenuLabel}
              onClick={toggleMenu}
            >
              <i
                aria-hidden="true"
                className="glyphicon glyphicon-menu-hamburger"
              />
            </button>
          </div>
        )}
        <div className={`${defaultClassName}__leftSection`}>
          {contentLeft}
          <h1 className={`${defaultClassName}__title`}>
            {title}
            {subtitle ? (
              <span className={`${defaultClassName}__subtitle`}>
                {subtitle}
              </span>
            ) : null}
          </h1>
          {children}
        </div>
        {contentRight ? (
          <div className={`${defaultClassName}__rightSection`}>
            {contentRight}
          </div>
        ) : null}
      </div>

      {isAnchorNavBarPresent ? (
        <AnchorNavBar items={anchorNavBarItems} />
      ) : null}
    </>
  );
};

export { HeaderTitle };
