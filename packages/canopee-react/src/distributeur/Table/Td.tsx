import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"td"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const Td = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__cell",
    modifiers: classModifier?.split(" "),
    className,
  });
  return (
    <td className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </td>
  );
};

export { Td };
