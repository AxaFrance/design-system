import {
  type ComponentPropsWithoutRef,
  isValidElement,
  type PropsWithChildren,
  useMemo,
  type ReactElement,
  type HTMLAttributes,
  type Dispatch,
  type SetStateAction,
  Children,
  cloneElement,
} from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";

type NavBarProps = {
  activeLink?: number;
  setActiveLink: Dispatch<SetStateAction<number | undefined>>;
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
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter((c) => Boolean(c)),
    [children],
  );

  return (
    <nav role="navigation" aria-label="Menu principal" {...otherProps}>
      <ul className="af-navbar-container" role="menubar">
        {Children.map(validChildren, (child, index) => (
          <li className="af-navbar-item" role="none">
            {cloneElement<HTMLAttributes<HTMLElement>>(
              child as ReactElement<HTMLAttributes<HTMLElement>>,
              {
                className:
                  `af-navbar-item__link ${index === activeLink ? "af-navbar-item__link--active" : ""}`.trim(),
                onClick: () => setActiveLink(index),
                onFocus: () => setActiveLink(index),
                role: "menuitem",
              },
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
