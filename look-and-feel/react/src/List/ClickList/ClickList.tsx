import type { ComponentProps } from "react";
import { List } from "..";
import { ClickItem } from "./ClickItem";

type TClickList = {
  items: Array<ComponentProps<typeof ClickItem>>;
  classModifier?: string;
};

export const ClickList = ({ items, classModifier }: TClickList) => (
  <List classModifier={`click-list ${classModifier}`} tabIndex={-1}>
    {items.map(({ id, ...props }) => (
      <ClickItem key={id} id={id} {...props} />
    ))}
  </List>
);
