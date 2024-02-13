import { ReactNode } from "react";
import { getComponentClassName } from "../../agent";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { Action } from "../../Action/Action";
import "@axa-fr/design-system-css/dist/Header/Title/Title.scss";

const defaultClassName = "af-title-bar";

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  toggleMenu?: () => void;
  className?: string;
  classModifier?: string;
  isSticky?: boolean;
};

const Title = ({
  title,
  subtitle,
  children,
  toggleMenu,
  className,
  classModifier,
  isSticky = true,
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
