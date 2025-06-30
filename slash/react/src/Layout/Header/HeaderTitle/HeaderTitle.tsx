import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/HeaderTitle/HeaderTitle.scss";

import { getComponentClassName } from "../../../utilities";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { Action } from "../../../Action/Action";
import { getClassModifier } from "./HeaderTitle.helpers";

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
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    getClassModifier(classModifier, isSticky),
    defaultClassName,
  );
  return (
    <div className={componentClassName}>
      <div className={`container ${defaultClassName}__wrapper`}>
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
            {subtitle && (
              <span className={`${defaultClassName}__subtitle`}>
                {subtitle}
              </span>
            )}
          </h1>
          {children}
        </div>
        {contentRight && (
          <div className={`${defaultClassName}__rightSection`}>
            {contentRight}
          </div>
        )}
      </div>
    </div>
  );
};

export { HeaderTitle };
