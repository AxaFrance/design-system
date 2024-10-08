import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../utilities";

type Props = ComponentPropsWithoutRef<"td"> & {
  classModifier?: string;
};

const Td = ({
  children,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-table__cell",
  );
  return (
    <td className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </td>
  );
};

export { Td };
