import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/dist/common/assets/logo-axa.svg";
import { useCallback, useEffect, useState } from "react";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import { NavBar } from "./NavBar";
import { PreviousLink } from "./PreviousLink/PreviousLink";
import { HeaderProps } from "./types";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Button, ButtonVariants, Svg } from "../..";
import { BREAKPOINT } from "../../utilities";

export const Header = ({
  defaultActiveLink,
  links,
  previousLink,
  rightItems,
}: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number | undefined>(
    defaultActiveLink,
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const resetActiveLink = useCallback(
    () => setActiveLink(defaultActiveLink),
    [defaultActiveLink],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINT.MD && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", () => handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <header className="af-header">
        <div className="af-header-container">
          <div className="af-header-left-item">
            <img className="af-logo" src={logo} alt="" />
            <NavBar
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              links={links}
            />
          </div>
          {rightItems && (
            <div className="af-header-right-item">
              {rightItems.map(
                ({ props: { children, id, ...otherProps }, Wrapper }) => (
                  <Wrapper key={id} {...otherProps}>
                    {children}
                  </Wrapper>
                ),
              )}
            </div>
          )}
          <Button
            aria-label="burger menu button"
            onClick={toggleMenu}
            variant={ButtonVariants.ghost}
          >
            <Svg src={menu} aria-hidden />
          </Button>
        </div>
        <BurgerMenu
          isOpen={isOpen}
          links={links}
          rightItems={rightItems}
          setActiveLink={setActiveLink}
          setIsOpen={setIsOpen}
        />
      </header>
      {previousLink && (
        <PreviousLink handleClick={resetActiveLink}>
          {previousLink}
        </PreviousLink>
      )}
      <div className={`af-header-overlay ${isOpen ? "open" : ""}`} />
    </>
  );
};
