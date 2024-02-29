import { AllHTMLAttributes, RefObject } from "react";
import "@axa-fr/design-system-css/dist/Header/NavBar/NavBar.scss";
import "@axa-fr/design-system-css/dist/Header/Drawer/Drawer.scss";

type Props = AllHTMLAttributes<HTMLAnchorElement> & {
  handleKeys: () => void;
  isMenuOpen?: boolean;
  refCallBackFocus: RefObject<HTMLAnchorElement>;
};

const NavBarItemLink = ({
  className = "af-nav__link",
  label,
  href = "#",
  tabIndex = -1,
  role = "menuitem",
  refCallBackFocus,
  isMenuOpen = false,
  ...otherProps
}: Props) => (
  <a
    className={className}
    ref={refCallBackFocus}
    role={role}
    href={href}
    tabIndex={tabIndex}
    aria-expanded={isMenuOpen}
    {...otherProps}
  >
    {label}
  </a>
);

export { NavBarItemLink };
