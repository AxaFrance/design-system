import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export const rowSizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
} as const;
export type RowSizeVariants = keyof typeof rowSizeVariants;

export type TrProps = ComponentPropsWithRef<"tr"> & {
  size?: RowSizeVariants;
};

export const Tr = ({
  size = "S",
  className,
  children,
  ...tableRowProps
}: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__tr",
    className,
    modifiers: [rowSizeVariants[size]],
  });
  return (
    <tr className={componentClassName} {...tableRowProps}>
      {children}
    </tr>
  );
};
