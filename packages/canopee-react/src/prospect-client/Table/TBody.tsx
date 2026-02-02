import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type BodyColorVariants = "white" | "blue" | "alternate";

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
