import {
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { getComponentClassName } from "../../../../utilities";
import { handleLinkFocus } from "./NavBarItemBase.helpers";

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
  }, [hasFocus, isMenuOpen]);

  /* On ajoute la classe permettant définir l'état ouvert sur l'élément
   * si celui a le focus, si le menu est ouvert et s'il possède des éléments enfants
   */
  const openClass = useMemo(
    () => (hasFocus && isMenuOpen && children ? "af-nav__item--open" : ""),
    [children, hasFocus, isMenuOpen],
  );

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
