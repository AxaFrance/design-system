import "@axa-fr/design-system-css/dist/Layout/Header/Header.client.scss";
import logo from "@axa-fr/design-system-css/dist/common/assets/logo-axa.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  Children,
  ReactElement,
  isValidElement,
  useMemo,
  ReactNode,
  useState,
} from "react";

type HeaderProps = {
  children: ReactNode;
  positionInit?: number;
  rightItem?: JSX.Element;
} & ComponentPropsWithoutRef<"header">;

export const HeaderClient = ({
  children,
  positionInit = 0,
  rightItem,
}: PropsWithChildren<HeaderProps>) => {
  const [position, setPosition] = useState(positionInit);
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean),
    [children],
  );

  return (
    <header className="af-header">
      <div className="af-header-container">
        <div className="af-header-nav">
          <img className="af-logo" src={logo} alt="" />
          {children && (
            <ul className="af-header-menu">
              {Children.map(validChildren, (child, index) => (
                <li
                  className={`${index === position ? "af-header-menu-link af-header-menu-link--active" : "af-header-menu-link"}`}
                >
                  {child}
                </li>
              ))}
            </ul>
          )}
        </div>
        {rightItem && <div className="af-header-right-item">{rightItem}</div>}
      </div>
    </header>
  );
};
