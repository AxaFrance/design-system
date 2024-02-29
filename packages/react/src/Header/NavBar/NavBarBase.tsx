import { FocusEvent, MouseEvent, ReactNode } from "react";
import "@axa-fr/design-system-css/dist/Header/NavBar/NavBar.scss";
import "@axa-fr/design-system-css/dist/Header/Drawer/Drawer.scss";

import { getComponentClassName } from "../../agent";

type Props = {
  children?: ReactNode;
  classModifier?: string;
  className?: string;
  handleKeys: (key: string) => void;
  id?: string;
  isMenuFocused?: boolean;
  isVisible: boolean;
  onBlur: (action: { e: FocusEvent<HTMLUListElement> }) => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onFocus: (action: { e: FocusEvent<HTMLUListElement> }) => void;
  toggleMenuId?: string;
};

const NavBarBase = ({
  children,
  className,
  classModifier,
  handleKeys,
  id = "mainmenu",
  isMenuFocused,
  isVisible = true,
  onBlur,
  onClick,
  onFocus,
  toggleMenuId = "togglemenu",
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-nav",
  );

  return (
    <div className={componentClassName}>
      <button
        aria-controls={id}
        aria-haspopup="true"
        type="button"
        onClick={onClick}
        className={`mask fade ${isVisible ? "show" : ""}`}
        id={`open-${toggleMenuId}`}
        aria-label="Open Menu"
      />
      <nav
        className={`af-nav af-drawer left ${isVisible ? "show" : ""}`}
        role="navigation"
        aria-label="Menu principal"
      >
        <div className="container af-nav__wrapper">
          <div className="af-nav__aside-header">
            <h4 className="af-nav__aside-title">Menu</h4>
            <button
              aria-controls={id}
              aria-haspopup="true"
              onClick={onClick}
              type="button"
              className="af-nav__aside-close"
              id={`close-${toggleMenuId}`}
              aria-label="Close Menu"
            >
              ×
            </button>
          </div>
          <ul
            onKeyDown={(e) => {
              e.preventDefault();
              handleKeys(e.key);
            }}
            onFocus={(e) => {
              onFocus({ e });
            }}
            onBlur={(e) => {
              onBlur({ e });
            }}
            className={`af-nav__list ${
              isMenuFocused ? "af-nav__list--focused" : ""
            }`}
            role="menubar"
            id={id}
          >
            {children}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export { NavBarBase };
