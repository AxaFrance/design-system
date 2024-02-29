import { ReactNode } from "react";
import "@axa-fr/design-system-css/dist/Header/Title/Title.scss";

import { getComponentClassName } from "../../agent";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { Action } from "../../Action/Action";

const defaultClassName = "af-title-bar";

type Props = {
  children?: ReactNode;
  classModifier?: string;
  className?: string;
  isSticky?: boolean;
  subtitle?: string;
  title: string;
  toggleMenu?: () => void;
};

const Title = ({
  children,
  classModifier,
  className,
  isSticky = true,
  subtitle,
  title,
  toggleMenu,
}: Props) => {
  const classModifierSticky =
    classModifier !== undefined ? "sticky" : `${classModifier} sticky`.trim();

  const componentClassName = getComponentClassName(
    className,
    isSticky ? classModifierSticky : classModifier,
    defaultClassName,
  );
  return (
    <div className={componentClassName}>
      <div className={`container ${defaultClassName}__wrapper`}>
        {!!toggleMenu && (
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
        <h1 className={`${defaultClassName}__title`}>
          {title}
          {subtitle && (
            <span className={`${defaultClassName}__subtitle`}>{subtitle}</span>
          )}
        </h1>
        {children}
      </div>
    </div>
  );
};

export { Title };
