import { Children, ComponentProps, ComponentType } from "react";
import {
  CardCommon as Card,
  type CardCommonProps,
} from "../../Card/CardCommon";
import { generateId } from "../../utilities/generateId";

export type ListProps = CardCommonProps<"ul" | "ol">;

type ListPropsCommon = ListProps & {
  CardComponent: ComponentType<ComponentProps<typeof Card>>;
};

export const ListCommon = ({
  children,
  CardComponent,
  as = "ul",
  ...listProps
}: ListPropsCommon) => (
  <CardComponent as={as} {...listProps}>
    {Children.toArray(children).map((child) => (
      <li key={generateId(child as object)}>{child}</li>
    ))}
  </CardComponent>
);
