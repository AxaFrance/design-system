import {
  Children,
  ComponentProps,
  ComponentType,
  ReactElement,
  isValidElement,
  useMemo,
} from "react";
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
}: ListPropsCommon) => {
  const validChildren = useMemo<ReactElement[]>(
    () =>
      (
        Children.map(children, (child) => isValidElement(child) && child) ?? []
      ).filter(Boolean),
    [children],
  );

  return (
    <CardComponent as="ul" {...listProps}>
      {Children.map(validChildren, (child) => (
        <li key={child.key}>{child}</li>
      ))}
    </CardComponent>
  );
};
