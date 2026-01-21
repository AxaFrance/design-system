import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export const bodyColorVariants = {
  white: "white",
  blue: "blue",
  alternate: "alternate",
} as const;
export type BodyColorVariants = keyof typeof bodyColorVariants;

export type TBodyProps = ComponentPropsWithRef<"tbody"> & {
  color?: BodyColorVariants;
};

export const TBody = ({
  color = "white",
  className,
  children,
  ...tableBodyProps
}: TBodyProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__tbody",
    className,
    modifiers: [bodyColorVariants[color]],
  });
  return (
    <tbody className={componentClassName} {...tableBodyProps}>
      {children}
    </tbody>
  );
};
