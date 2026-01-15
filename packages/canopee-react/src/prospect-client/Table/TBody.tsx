import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TBodyProps = ComponentPropsWithRef<"tbody"> & {};

export const TBody = ({
  className,
  children,
  ...tableBodyProps
}: TBodyProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__body",
    className,
  });
  return (
    <tbody className={componentClassName} {...tableBodyProps}>
      {children}
    </tbody>
  );
};
