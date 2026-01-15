import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TdProps = ComponentPropsWithRef<"td"> & {};

export const Td = ({ className, children, id, ...tableCellProps }: TdProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__td",
    className,
  });
  return (
    <td id={id} className={componentClassName} {...tableCellProps}>
      {children}
    </td>
  );
};
