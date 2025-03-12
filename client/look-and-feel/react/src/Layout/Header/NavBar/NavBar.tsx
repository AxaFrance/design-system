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
import classNames from "classnames";

type NavBarProps = {
  activeLink?: number;
  setActiveLink: Dispatch<SetStateAction<number | undefined>>;
} & ComponentPropsWithoutRef<"nav">;

const NavBar = ({
  activeLink,
  children,
  setActiveLink,
  ...props
}: PropsWithChildren<NavBarProps>) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter((c) => Boolean(c)),
    [children],
  );

  if (validChildren.length === 0) return null;

  return (
    <nav role="navigation" aria-label="Menu principal" {...props}>
      <ul className="af-navbar-container" role="menubar">
        {Children.map(validChildren, (child, index) => (
          <li className="af-navbar-item" role="none">
            {cloneElement<HTMLAttributes<HTMLElement>>(
              child as ReactElement<HTMLAttributes<HTMLElement>>,
              {
                className: classNames("af-navbar-item__link", {
                  "af-navbar-item__link--active": index === activeLink,
                }),
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
