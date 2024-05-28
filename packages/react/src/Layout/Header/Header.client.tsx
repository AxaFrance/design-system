import "@axa-fr/design-system-css/dist/Layout/Header/Header.client.scss";
import logo from "@axa-fr/design-system-css/dist/common/assets/logo-axa.svg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type HeaderProps = {
  rightItem?: JSX.Element;
} & ComponentPropsWithoutRef<"header">;

export const HeaderClient = ({ rightItem }: PropsWithChildren<HeaderProps>) => {
  return (
    <header className="af-header">
      <div className="af-header-container">
        <img className="af-logo" src={logo} alt="" />
        {rightItem ? (
          <div className="af-header-right-item">{rightItem}</div>
        ) : null}
      </div>
    </header>
  );
};
