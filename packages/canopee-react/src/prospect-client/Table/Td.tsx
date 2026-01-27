import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type CellContentPositionVariants = "left" | "center" | "right";
export type CellContentVerticalAlignVariants = "top" | "middle";
export const tdSizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
} as const;
export type TdSizeVariants = keyof typeof tdSizeVariants;
export type CellColorVariant = "white" | "blue";

export type TdProps = ComponentPropsWithRef<"td"> & {
  position?: CellContentPositionVariants;
  verticalAlign?: CellContentVerticalAlignVariants;
  size?: TdSizeVariants;
  variant?: CellColorVariant;
};

export const Td = ({
  position = "left",
  verticalAlign = "middle",
  size,
  variant,
  className,
  children,
  id,
  ...tableCellProps
}: TdProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__td",
    className,
    modifiers: [position, verticalAlign, size && tdSizeVariants[size], variant],
  });
  return (
    <td id={id} className={componentClassName} {...tableCellProps}>
      {children}
    </td>
  );
};
