import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TrProps = ComponentPropsWithRef<"dt">;

export const Dt = ({ className, children, ...DtProps }: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-card__dt",
    className,
  });
  return (
    <dt className={componentClassName} {...DtProps}>
      {children}
    </dt>
  );
};
