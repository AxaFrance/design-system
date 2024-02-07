import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../Form/core";

type Props = ComponentPropsWithoutRef<"tr"> & {
  classModifier?: string;
};

const Tr = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-table__tr",
  );
  return (
    <tr className={componentClassName} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

export { Tr };
