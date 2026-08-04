import "@axa-fr/canopee-css/prospect/MenuBurger/MenuBurgerAll.css";

import { Button } from "../Button/ButtonApollo";
import { Icon } from "../Icon/IconApollo";
import { ClickItem } from "../List/ClickItem/ClickItemApollo";
import { List } from "../List/List/ListApollo";
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
