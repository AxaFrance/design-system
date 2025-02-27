import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  useCallback,
  useState,
} from "react";
import { NavBar } from "./NavBar";
import { PreviousLink } from "./PreviousLink/PreviousLink";

type HeaderProps = {
  defaultActiveLink?: number;
  previousLink?: ReactNode;
  rightItem?: ReactNode[];
} & ComponentPropsWithoutRef<"header">;

export const Header = ({
  children,
  defaultActiveLink,
  previousLink,
  rightItem,
}: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number | undefined>(
    defaultActiveLink,
  );

  const resetActiveLink = useCallback(
    () => setActiveLink(defaultActiveLink),
    [defaultActiveLink],
  );

  return (
    <>
      <header className="af-header">
        <div className="af-header-container">
          <div className="af-header-left-item">
            <img className="af-logo" src={logo} alt="" />
            {children && (
              <NavBar activeLink={activeLink} setActiveLink={setActiveLink}>
                {children}
              </NavBar>
            )}
          </div>
          {rightItem && <div className="af-header-right-item">{rightItem}</div>}
        </div>
      </header>
      {previousLink && (
        <PreviousLink handleClick={resetActiveLink}>
          {previousLink}
        </PreviousLink>
      )}
    </>
  );
};
