import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"tbody"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const TBody = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__body",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <tbody className={componentClassName} {...otherProps}>
      {children}
    </tbody>
  );
};

export { TBody };
