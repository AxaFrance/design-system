import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type HeadColorVariants = "gray" | "blue";

export type THeadProps = ComponentPropsWithRef<"thead"> & {
  variant?: HeadColorVariants;
};

export const THead = ({
  variant = "blue",
  className,
  children,
  ...tableHeadProps
}: THeadProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__thead",
    className,
    modifiers: [variant],
  });
  return (
    <thead className={componentClassName} {...tableHeadProps}>
      {children}
    </thead>
  );
};
