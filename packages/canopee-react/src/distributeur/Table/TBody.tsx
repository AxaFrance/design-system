import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

const TBody = ({
  children,
  className,
  ...otherProps
}: ComponentPropsWithoutRef<"tbody">) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__body",
    className,
  });
  return (
    <tbody className={componentClassName} {...otherProps}>
      {children}
    </tbody>
  );
};

export { TBody };
