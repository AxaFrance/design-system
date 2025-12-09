import { Children, ComponentProps, ComponentType } from "react";
import {
  CardCommon as Card,
  type CardCommonProps,
} from "../../Card/CardCommon";
import { generateId } from "../../utilities/generateId";

export type ListProps = CardCommonProps<"ul">;

type ListPropsCommon = ListProps & {
  CardComponent: ComponentType<ComponentProps<typeof Card>>;
};

export const ListCommon = ({
  children,
  CardComponent,
  ...listProps
}: ListPropsCommon) => (
  <CardComponent as="ul" {...listProps}>
    {Children.toArray(children).map((child) => (
      <li key={generateId(child as object)}>{child}</li>
    ))}
  </CardComponent>
);
