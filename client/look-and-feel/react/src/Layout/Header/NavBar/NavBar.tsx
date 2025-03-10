import { useCallback, type PropsWithChildren } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";
import classNames from "classnames";
import { NavBarProps } from "./types";

export const NavBar = ({
  activeLink,
  links,
  setActiveLink,
  ...otherProps
}: PropsWithChildren<NavBarProps>) => {
  const handleEvent = useCallback(
    (index: number) => () => setActiveLink(index),
    [setActiveLink],
  );

  if (!links || links.length === 0) {
    return null;
  }

  return (
    <nav role="navigation" aria-label="Menu principal" {...otherProps}>
      <ul className="af-navbar-container" role="menubar">
        {links?.map(
          ({ props: { children, id, ...otherLinkProps }, Wrapper }, index) => (
            <li key={id} className="af-navbar-item" role="none">
              <Wrapper
                {...otherLinkProps}
                className={classNames("af-navbar-item__link", {
                  "af-navbar-item__link--active": index === activeLink,
                })}
                role="menuitem"
                onClick={handleEvent(index)}
                onFocus={handleEvent(index)}
              >
                {children}
              </Wrapper>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};
