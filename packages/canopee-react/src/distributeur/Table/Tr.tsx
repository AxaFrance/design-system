import { type ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"tr"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const Tr = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__tr",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <tr className={componentClassName} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

export { Tr };
