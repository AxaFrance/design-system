import { Children, type ComponentProps, type ComponentType } from "react";
import {
  CardCommon as Card,
  type CardCommonProps,
  type CardVariants,
} from "../../Card/CardCommon";
import { generateId } from "../../utilities/generateId";

/**
 * Props for the List component.
 * Extends `CardCommonProps` (without `variant` override) to allow the list
 * to be rendered as a `ul` or `ol` with optional card styling.
 */
export type ListProps = Omit<CardCommonProps<"ul" | "ol">, "variant"> & {
  /**
   * Visual variant inherited from Card.
   * - `"default"` — bordered list with padding.
   * - `"unstyled"` — removes border and padding.
   * @default "default"
   */
  variant?: CardVariants;
};

type ListPropsCommon = ListProps & {
  CardComponent: ComponentType<ComponentProps<typeof Card>>;
};

/**
 * Renders an accessible list (`ul` or `ol`) wrapped in a Card.
 * Each direct child is automatically wrapped in a `<li>` element.
 *
 * @component
 * @param {ListPropsCommon} props - List props.
 * @param {ReactNode} props.children - Items to render inside the list. Each child is wrapped in a `<li>`.
 * @param {"ul" | "ol"} [props.as="ul"] - HTML list element to render.
 * @param {CardVariants} [props.variant="default"] - Visual variant of the surrounding Card.
 * @param {ComponentType} props.CardComponent - Injected Card component (theme-specific).
 * @returns {JSX.Element} The rendered List component.
 */

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
