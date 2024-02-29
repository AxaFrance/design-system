import {
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import "@axa-fr/design-system-css/dist/Header/NavBar/NavBar.scss";
import "@axa-fr/design-system-css/dist/Header/Drawer/Drawer.scss";

import { getComponentClassName } from "../../agent";
import { handleLinkFocus } from "./NavBarItem.helpers";

type Props = HTMLAttributes<HTMLLIElement> & {
  actionElt: ReactElement;
  handleKeys: (event: KeyboardEvent<HTMLLIElement>) => void;
  hasFocus?: boolean;
  isMenuOpen?: boolean;
  classModifier?: string;
};
export const NavBarItemBase = ({
  tabIndex = -1,
  role = "menuitem",
  children,
  hasFocus,
  handleKeys,
  isMenuOpen,
  className,
  classModifier,
  actionElt,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-nav__item",
  );
  const ref = useRef(null);

  useEffect(() => {
    handleLinkFocus(ref?.current, hasFocus, isMenuOpen);
  });

  const openClass =
    hasFocus && isMenuOpen && children ? "af-nav__item--open" : "";

  return (
    <li
      className={`${componentClassName} ${openClass}`}
      role="none"
      onKeyDown={(e) => {
        e.preventDefault();
        handleKeys(e);
      }}
    >
      <actionElt.type
        key={actionElt.key}
        {...actionElt.props}
        {...otherProps}
        role={role}
        tabIndex={tabIndex}
        aria-expanded={isMenuOpen}
        ref={ref}
      />
      {children}
    </li>
  );
};
