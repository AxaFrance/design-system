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
  color?: CellColorVariant;
};

export const Td = ({
  position = "left",
  verticalAlign = "middle",
  size,
  color, // couleur gardée ici aussi pour mettre en surbrillance une colonne en cas de check sur le th associé
  className,
  children,
  id,
  ...tableCellProps
}: TdProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__td",
    className,
    modifiers: [position, verticalAlign, size && tdSizeVariants[size], color],
  });
  return (
    <td id={id} className={componentClassName} {...tableCellProps}>
      <div className="af-table__td-wrapper">{children}</div>
    </td>
  );
};
