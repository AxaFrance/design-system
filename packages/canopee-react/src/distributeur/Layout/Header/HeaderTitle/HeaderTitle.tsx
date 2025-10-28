import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/HeaderTitle/HeaderTitle.scss";

import classNames from "classnames";
import { getComponentClassName } from "../../../utilities";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { Action } from "../../../Action/Action";
import { getClassModifier } from "./HeaderTitle.helpers";
import { AnchorNavBar, AnchorNavBarItem } from "../AnchorNavBar/AnchorNavBar";

const defaultClassName = "af-title-bar";

type Props = {
  children?: ReactNode;
  classModifier?: string;
  className?: string;
  isSticky?: boolean;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  subtitle?: string;
  title: string;
  toggleMenu?: () => void;
  anchorNavBarItems?: AnchorNavBarItem[];
};

const HeaderTitle = ({
  children,
  classModifier,
  className,
  isSticky = true,
  contentLeft,
  contentRight,
  subtitle,
  title,
  toggleMenu,
  anchorNavBarItems,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    getClassModifier(classModifier, isSticky),
    defaultClassName,
  );

  const isAnchorNavBarPresent =
    anchorNavBarItems && anchorNavBarItems.length > 0;

  return (
    <>
      <div
        className={classNames("af-container", componentClassName, {
          [`${defaultClassName}__withAnchorNavBar`]: isAnchorNavBarPresent,
        })}
      >
        {Boolean(toggleMenu) && (
          <div className="burger-container">
            <ToggleButton idControl="mainmenu">
              <Action
                className="btn af-title-bar__mobile-menu af-btn--circle"
                id="togglemenu"
                icon="menu-hamburger"
                title="Toggle menu"
                onClick={toggleMenu}
              />
            </ToggleButton>
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
