import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.css";

export type NavBarProps = {
  activeLink?: number;
  setActiveLink: (index: number) => void;
  links: {
    label: string;
    href: string;
    type: ReactElement;
  }[];
} & ComponentPropsWithoutRef<"nav">;

const NavBar = ({
  activeLink,
  setActiveLink,
  links,
  ...otherProps
}: PropsWithChildren<NavBarProps>) => {
  return (
    <nav aria-label="Menu principal" {...otherProps}>
      <ul className="af-navbar-container">
        {links?.map((link, index) => (
          <li className="af-navbar-item" role="none" key={link?.label}>
            <link.type.type
              className={`af-navbar-item__link ${index === activeLink ? "af-navbar-item__link--active" : ""}`.trim()}
              onClick={() => setActiveLink(index)}
              onFocus={() => setActiveLink(index)}
              href={link?.href}
            >
              {link?.label}
            </link.type.type>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
