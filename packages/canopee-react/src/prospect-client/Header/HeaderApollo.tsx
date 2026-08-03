import "@axa-fr/canopee-css/prospect/Header/HeaderApollo.css";

import { AppName } from "../AppName/AppNameApollo";
import { Heading } from "../Heading/HeadingApollo";
import { MenuBurger } from "../MenuBurger/MenuBurgerApollo";
import { ClickIcon } from "../ClickIcon/ClickIconApollo";
import { HeaderCommon, type HeaderProps } from "./HeaderCommon";

export const Header = (props: HeaderProps) => (
  <HeaderCommon
    AppNameComponent={AppName}
    HeadingComponent={Heading}
    MenuBurgerComponent={MenuBurger}
    ClickIconComponent={ClickIcon}
    {...props}
  />
);

export type { HeaderProps };
