import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type TrProps = ComponentPropsWithRef<"dt">;

export const Dt = ({ className, children, ...dtProps }: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-mobile-card__dt",
    className,
  });
  return (
    <dt className={componentClassName} {...dtProps}>
      {children}
    </dt>
  );
};
