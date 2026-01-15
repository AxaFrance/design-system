import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TrProps = ComponentPropsWithRef<"tr"> & {};

export const Tr = ({ className, children, id, ...tableRowProps }: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__row",
    className,
  });
  return (
    <tr id={id} className={componentClassName} {...tableRowProps}>
      {children}
    </tr>
  );
};
