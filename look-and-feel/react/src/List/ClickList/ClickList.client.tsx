import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import type { ComponentProps, ReactNode } from "react";
import { List } from "..";
import { Svg } from "../../Svg";

import "@axa-fr/design-system-look-and-feel-css/dist/List/ClickList/ClickList.client.scss";

type TClickList = {
  items: Array<
    ComponentProps<"button"> & {
      label: ReactNode;
      icon?: ReactNode;
    }
  >;
  classModifier?: string;
};

export const ClickList = ({ items, classModifier }: TClickList) => (
  <List classModifier={`list click-list ${classModifier}`} tabIndex={-1}>
    {items.map(({ id, label, icon, ...buttonProps }) => (
      <button
        id={id}
        key={id ?? label?.toString()}
        className="af-list-item__button"
        type="button"
        {...buttonProps}
      >
        <div className="af-list-item__content">
          {icon && <div className="af-list-item-content__icon">{icon}</div>}
          <div className="af-list-item-content__label">{label}</div>
        </div>
        <div className="af-list-item__action">
          <Svg src={chevron} />
        </div>
      </button>
    ))}
  </List>
);
