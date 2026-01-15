import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TableProps = ComponentPropsWithRef<"table"> & {};

export const Table = ({ className, children, ...tableProps }: TableProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table",
    className,
  });
  return (
    <table className={componentClassName} {...tableProps}>
      {children}
    </table>
  );
};
