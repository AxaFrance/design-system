import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"td"> & {};

const Td = ({ children, id, className, ...otherProps }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__cell",
    modifiers: [],
    className,
  });
  return (
    <td className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </td>
  );
};

export { Td };
