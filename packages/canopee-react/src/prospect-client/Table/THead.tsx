import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type THeadProps = ComponentPropsWithRef<"thead"> & {};

export const THead = ({
  className,
  children,
  ...tableHeadProps
}: THeadProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__head",
    className,
  });
  return (
    <thead className={componentClassName} {...tableHeadProps}>
      {children}
    </thead>
  );
};
