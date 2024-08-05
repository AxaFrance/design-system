import React, {
  ComponentPropsWithoutRef,
  isValidElement,
  PropsWithChildren,
  useMemo,
  type ReactElement,
} from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Client/NavBar/NavBar.scss";

type NavBarProps = {
  activeLink: number;
  setActiveLink: React.Dispatch<React.SetStateAction<number>>;
} & ComponentPropsWithoutRef<"nav">;

const NavBar = ({
  activeLink,
  children,
  setActiveLink,
  ...otherProps
}: PropsWithChildren<NavBarProps>) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        React.Children.map(
          children,
          (child) => isValidElement(child) && child,
        ) ?? []
      ).filter((c) => Boolean(c)),
    [children],
  );

  return (
    <nav role="navigation" aria-label="Menu principal" {...otherProps}>
      <ul className="af-navbar-container" role="menubar">
        {React.Children.map(validChildren, (child, index) => (
          <li className="af-navbar-item" role="none">
            {React.cloneElement(child, {
              className:
                `af-navbar-item__link ${index === activeLink ? "af-navbar-item__link--active" : ""}`.trim(),
              onClick: () => setActiveLink(index),
              onFocus: () => setActiveLink(index),
              role: "menuitem",
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
