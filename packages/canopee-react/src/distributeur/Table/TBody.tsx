import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"tbody"> & {};

const TBody = ({ children, className, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__body",
    modifiers: [],
    className,
  });
  return (
    <tbody className={componentClassName} {...otherProps}>
      {children}
    </tbody>
  );
};

export { TBody };
