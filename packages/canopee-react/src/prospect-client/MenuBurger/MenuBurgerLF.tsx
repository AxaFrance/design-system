import "@axa-fr/canopee-css/client/MenuBurger/MenuBurgerLF.css";

import { Button } from "../Button/ButtonLF";
import { Icon } from "../Icon/IconLF";
import { ClickItem } from "../List/ClickItem/ClickItemLF";
import { List } from "../List/List/ListLF";
import { MenuBurgerCommon, type MenuBurgerProps } from "./MenuBurgerCommon";

export const MenuBurger = (props: MenuBurgerProps) => (
  <MenuBurgerCommon
    ButtonComponent={Button}
    ClickItemComponent={ClickItem}
    IconComponent={Icon}
    ListComponent={List}
    {...props}
  />
);

export type { MenuBurgerProps };
