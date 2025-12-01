import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../utilities";

type Props = ComponentPropsWithoutRef<"thead"> & {
  classModifier?: string;
};

const THead = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-table__thead",
  );
  return (
    <thead className={componentClassName} {...otherProps}>
      {children}
    </thead>
  );
};

export { THead };
