import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

export type ThProps = ComponentPropsWithoutRef<"th"> & {
  sortable?: boolean;
};

const Th = ({ children, id, className, sortable, ...otherProps }: ThProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__th",
    modifiers: [sortable && "sortable"],
    className,
  });
  return (
    <th className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </th>
  );
};

export { Th };
