import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.css";
import { TBurgerMenuPops } from "../../../BurgerMenu/BurgerMenu";

export type NavBarProps = {
  activeLink?: number;
  setActiveLink: React.Dispatch<React.SetStateAction<number | undefined>>;
  links?: TBurgerMenuPops["items"];
} & ComponentPropsWithoutRef<"nav">;

const NavBar = ({
  activeLink,
  setActiveLink,
  links,
  ...otherProps
}: PropsWithChildren<NavBarProps>) => {
  return (
    <nav role="navigation" aria-label="Menu principal" {...otherProps}>
      <ul className="af-navbar-container" role="menubar">
        {links?.map((link, index) => (
          <li className="af-navbar-item" role="none" key={Math.random()}>
            <a
              className={`af-navbar-item__link ${index === activeLink ? "af-navbar-item__link--active" : ""}`.trim()}
              onClick={() => setActiveLink(index)}
              onFocus={() => setActiveLink(index)}
              role="menuitem"
              href={link?.href}
            >
              {link?.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
