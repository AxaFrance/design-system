import { Children, ComponentProps, ComponentType, isValidElement } from "react";
import {
  CardCommon as Card,
  type CardCommonProps,
} from "../../Card/CardCommon";

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
    {Children.toArray(children).map(
      (child) => isValidElement(child) && <li key={child.key}>{child}</li>,
    )}
  </CardComponent>
);
