import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TrProps = ComponentPropsWithRef<"dd">;

export const Dd = ({ className, children, ...DdProps }: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-card__dd",
    className,
  });
  return (
    <dd className={componentClassName} {...DdProps}>
      {children}
    </dd>
  );
};
