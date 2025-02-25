import { ReactElement, ReactNode, useEffect, useState } from "react";
import close from "@material-symbols/svg-400/outlined/close-fill.svg";
import { ClickItem, ClickList } from "../List/ClickList";
import "@axa-fr/design-system-look-and-feel-css/src/BurgerMenu/BurgerMenu.scss";
import { BREAKPOINT } from "../utilities/constants";
import { Svg } from "../Svg";

export type TBurgerMenuPops = {
  children?: ReactNode;
  items: {
    label: string;
    icon?: ReactNode;
    classModifier?: string;
    href?: string;
    target?: string;
    isDisabled?: boolean;
  }[];
  links?: {
    label: string;
    href: string;
    type: ReactElement;
  }[];
  className?: string;
  handleClose: () => void;
};
export const BurgerMenu = ({
  items,
  className,
  children,
  handleClose,
  links,
}: TBurgerMenuPops) => {
  const [screenSize, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
  }, []);
  return (
    <nav
      role="navigation"
      className={[
        "af-card af-card--list af-card--click-list af-burger-menu",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ul className="af-list">
        {screenSize <= BREAKPOINT.MD && (
          <li className="af-list-close">
            <div className="icon-container">
              <Svg
                src={close}
                onClick={() => handleClose()}
                className="icon-close"
              />
            </div>
          </li>
        )}
        {items?.map((child) => {
          return (
            <li key={child.label} className="af-list__item">
              <ClickItem
                key={child.label}
                icon={child.icon}
                classModifier={child.classModifier}
                href={child.href}
                target={child.target}
                isDisabled={child.isDisabled}
              >
                <div>{child.label}</div>
              </ClickItem>
            </li>
          );
        })}
        {links?.map((link) => {
          return (
            <li key={link.label} className="af-list__item">
              <ClickItem key={link.label} href={link.href}>
                <div>{link.label}</div>
              </ClickItem>
            </li>
          );
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: !children ? "0" : "1.5rem",
            gap: "1rem",
          }}
        >
          {children}
        </div>
      </ul>
    </nav>
  );
};
