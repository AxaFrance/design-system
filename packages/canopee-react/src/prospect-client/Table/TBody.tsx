import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export const bodyColorVariants = {
  white: "white",
  blue: "blue",
  alternate: "alternate",
} as const;
export type BodyColorVariants = keyof typeof bodyColorVariants;

export type TBodyProps = ComponentPropsWithRef<"tbody"> & {
  variant?: BodyColorVariants;
};

export const TBody = ({
  variant = "white",
  className,
  children,
  ...tableBodyProps
}: TBodyProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__tbody",
    className,
    modifiers: [variant],
  });
  return (
    <tbody className={componentClassName} {...tableBodyProps}>
      {children}
    </tbody>
  );
};
