import type { ComponentProps, ElementType } from "react";
import { type PolymorphicComponent } from "../utilities/types/PolymorphicComponent";
import { getClassName } from "../utilities/getClassName";

export type CardCommonProps<T extends ElementType> = PolymorphicComponent<
  T,
  ComponentProps<"div">
>;

export const CardCommon = <T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: CardCommonProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={getClassName({
        baseClassName: "af-card",
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
