import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

const Td = ({
  children,
  id,
  className,
  ...otherProps
}: ComponentPropsWithoutRef<"td">) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__cell",
    className,
  });
  return (
    <td className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </td>
  );
};

export { Td };
