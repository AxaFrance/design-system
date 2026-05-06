import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type Props = ComponentPropsWithoutRef<"th"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  sortable?: boolean;
};

const Th = ({
  children,
  id,
  className,
  classModifier,
  sortable,
  ...otherProps
}: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-table__th",
    modifiers: [sortable && "sortable", ...(classModifier?.split(" ") ?? [])],
    className,
  });
  return (
    <th className={componentClassName} key={id} id={id} {...otherProps}>
      {children}
    </th>
  );
};

export { Th };
