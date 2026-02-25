import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TrProps = ComponentPropsWithRef<"dd">;

export const Dd = ({ className, children, ...ddProps }: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-mobile-card__dd",
    className,
  });
  return (
    <dd className={componentClassName} {...ddProps}>
      {children}
    </dd>
  );
};
