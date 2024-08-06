import "@axa-fr/design-system-slash-css/dist/Layout/Header/Client/Header.client.scss";
import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import { ComponentPropsWithoutRef, useCallback, useState } from "react";
import { NavBar } from "./NavBar";
import { PreviousLink } from "./PreviousLink/PreviousLink";

type HeaderProps = {
  defaultActiveLink?: number;
  previousLink?: JSX.Element;
  navBarLinks?: JSX.Element[];
  rightItem?: JSX.Element[];
} & ComponentPropsWithoutRef<"header">;

export const HeaderClient = ({
  defaultActiveLink = 0,
  navBarLinks,
  previousLink,
  rightItem,
}: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number>(defaultActiveLink);

  const resetActiveLink = useCallback(
    () => setActiveLink(defaultActiveLink),
    [defaultActiveLink],
  );

  return (
    <header className="af-header">
      <div className="af-header-container">
        <div className="af-header-left-item">
          <img className="af-logo" src={logo} alt="Logo AXA" />
          {navBarLinks && (
            <NavBar activeLink={activeLink} setActiveLink={setActiveLink}>
              {navBarLinks}
            </NavBar>
          )}
        </div>
        {rightItem && <div className="af-header-right-item">{rightItem}</div>}
      </div>
      {previousLink && (
        <PreviousLink handleClick={resetActiveLink}>
          {previousLink}
        </PreviousLink>
      )}
    </header>
  );
};
