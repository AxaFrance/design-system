import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"thead"> & {};

const THead = ({ children, className, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__thead",
    modifiers: [],
    className,
  });
  return (
    <thead className={componentClassName} {...otherProps}>
      {children}
    </thead>
  );
};

export { THead };
