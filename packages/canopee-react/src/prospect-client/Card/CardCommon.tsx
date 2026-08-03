import type { ComponentProps, ElementType } from "react";
import { type PolymorphicComponent } from "../utilities/types/PolymorphicComponent";
import { getClassName } from "../utilities/getClassName";

export const cardVariants = {
  default: "default",
  unstyled: "unstyled",
} as const;

export type CardVariants = keyof typeof cardVariants;

/**
 * Props for the Card component.
 *
 * @template T - The element type rendered by the card (defaults to `"div"`).
 */
export type CardCommonProps<T extends ElementType> = PolymorphicComponent<
  T,
  ComponentProps<"div"> & {
    /**
     * Visual variant of the card.
     * - `"default"` — bordered card with padding.
     * - `"unstyled"` — removes border and padding.
     * @default "default"
     */
    variant?: CardVariants;
  }
>;

/**
 * Polymorphic card wrapper that adds padding and a border.
 * The underlying HTML element can be changed via the `as` prop.
 *
 * @component
 * @template T - The element type rendered by the card.
 * @param {CardCommonProps<T>} props - Card props.
 * @param {ElementType} [props.as="div"] - HTML element or component to render as.
 * @param {CardVariants} [props.variant="default"] - Visual variant of the card.
 * @param {string} [props.className] - Additional CSS class applied to the root element.
 * @param {ReactNode} [props.children] - Content rendered inside the card.
 * @returns {JSX.Element} The rendered Card component.
 */

export const CardCommon = <T extends ElementType = "div">({
  as,
  children,
  className,
  variant = "default",
  ...props
}: CardCommonProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={getClassName({
        baseClassName: "af-card",
        modifiers: [variant !== "default" && variant],
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
