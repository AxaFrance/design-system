import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/dist/common/assets/logo-axa.svg";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import arrowDropDown from "@material-symbols/svg-400/outlined/arrow_drop_down.svg";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import { NavBar } from "./NavBar";
import { ButtonClient, ButtonProps, Variants } from "../../Button/Button";
import { BREAKPOINT } from "../../utilities";
import { Svg } from "../../Svg";
import { BurgerMenu, TBurgerMenuPops } from "../../BurgerMenu/BurgerMenu";
import { NavBarProps } from "./NavBar/NavBar";

type HeaderProps = {
  defaultActiveLink?: number;
  rightItem?: ButtonProps | string;
  burgerMenuItems?: TBurgerMenuPops["items"];
} & ComponentPropsWithoutRef<"header"> &
  Partial<NavBarProps>;

export const Header = ({
  links,
  defaultActiveLink,
  rightItem,
  burgerMenuItems,
  children,
}: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<number | undefined>(
    defaultActiveLink,
  );
  const [isActiveMenu, setisActiveMenu] = useState<boolean>(false);
  const [screenSize, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
  }, []);
  return (
    <header className={`af-header ${isActiveMenu ? "active" : ""}`}>
      <div className="af-header-container">
        <div className="af-header-left-item">
          <img className="af-logo" src={logo} alt="" />
          {links && (
            <NavBar
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              links={links}
            />
          )}
        </div>
        <div className="af-header-right-item">
          {typeof rightItem === "string" && rightItem && (
            <p className="af-header-text">{rightItem}</p>
          )}
          {typeof rightItem !== "string" &&
            rightItem &&
            screenSize >= BREAKPOINT.MD && (
              <ButtonClient
                iconLeft={rightItem?.iconLeft}
                onClick={() => {
                  setisActiveMenu(!isActiveMenu);
                }}
                variant={Variants.primary}
                iconRight={<Svg src={arrowDropDown} />}
              >
                {rightItem?.value}
              </ButtonClient>
            )}
          {typeof rightItem !== "string" &&
            rightItem &&
            screenSize <= BREAKPOINT.MD && (
              <Svg
                role="menu"
                src={menu}
                onClick={() => {
                  setisActiveMenu(!isActiveMenu);
                }}
              />
            )}
        </div>
        {isActiveMenu && (
          <BurgerMenu
            handleClose={() => setisActiveMenu(false)}
            items={
              screenSize <= BREAKPOINT.MD
                ? links?.concat(burgerMenuItems || []) || []
                : burgerMenuItems || []
            }
          >
            {children}
          </BurgerMenu>
        )}
      </div>
    </header>
  );
};
