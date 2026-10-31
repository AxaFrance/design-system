import "@axa-fr/canopee-css/client/Header/HeaderLF.css";

import { AppName } from "../AppName/AppName";
import { Heading } from "../Heading/HeadingLF";
import { MenuBurger } from "../MenuBurger/MenuBurgerLF";
import { ClickIcon } from "../ClickIcon/ClickIconLF";
import { ClickItem } from "../List/ClickItem/ClickItemLF";
import { HeaderCommon, type HeaderProps } from "./HeaderCommon";

export const Header = (props: HeaderProps) => (
  <HeaderCommon
    AppNameComponent={AppName}
    HeadingComponent={Heading}
    MenuBurgerComponent={MenuBurger}
    ClickIconComponent={ClickIcon}
    ClickItemComponent={ClickItem}
    {...props}
  />
);

export type { HeaderProps };
