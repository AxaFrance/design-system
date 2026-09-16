import { type ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"tr"> & {};

const Tr = ({ children, id, className, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__tr",
    modifiers: [],
    className,
  });
  return (
    <tr className={componentClassName} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

export { Tr };
