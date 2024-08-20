import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../slash";

type Props = ComponentPropsWithoutRef<"tbody"> & {
  classModifier?: string;
};

const TBody = ({
  children,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-table__body",
  );
  return (
    <tbody className={componentClassName} {...otherProps}>
      {children}
    </tbody>
  );
};

export { TBody };
