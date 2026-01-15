/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export const headerCellPositionVariants = {
  left: "left",
  center: "center",
  right: "right",
} as const;
export type HeaderCellPositionVariants =
  keyof typeof headerCellPositionVariants;

export const headerCellSizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
} as const;
export type HeaderCellSizeVariants = keyof typeof headerCellSizeVariants;

export type ThProps = ComponentPropsWithRef<"th"> & {
  position?: HeaderCellPositionVariants;
  size?: HeaderCellSizeVariants;
  onCheck?: Function;
  onSort?: Function;
};

export const Th = ({
  position = "left",
  size = "M",
  className,
  children,
  id,
  ...tableHeaderProps
}: ThProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__th",
    className,
    modifiers: [
      headerCellPositionVariants[position],
      headerCellSizeVariants[size],
    ],
  });
  return (
    <th id={id} className={componentClassName} {...tableHeaderProps}>
      {children}
    </th>
  );
};
