import { ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export const headColorVariants = {
  gray: "gray",
  blue: "blue",
} as const;
export type HeadColorVariants = keyof typeof headColorVariants;

export type THeadProps = ComponentPropsWithRef<"thead"> & {
  color?: HeadColorVariants;
};

export const THead = ({
  color = "blue",
  className,
  children,
  ...tableHeadProps
}: THeadProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__thead",
    className,
    modifiers: [headColorVariants[color]],
  });
  return (
    <thead className={componentClassName} {...tableHeadProps}>
      {children}
    </thead>
  );
};
