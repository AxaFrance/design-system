import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"thead"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const THead = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__thead",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <thead className={componentClassName} {...otherProps}>
      {children}
    </thead>
  );
};

export { THead };
