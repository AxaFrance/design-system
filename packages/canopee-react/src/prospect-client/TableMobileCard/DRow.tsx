import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";

export type DRowDirectionVariants = "row" | "column";

export type TrProps = ComponentPropsWithRef<"div"> & {
  direction?: DRowDirectionVariants;
};

export const DRow = ({
  className,
  children,
  direction = "row",
  ...dRowProps
}: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-mobile-card__drow",
    className,
    modifiers: [direction],
  });
  return (
    <div className={componentClassName} {...dRowProps}>
      {children}
    </div>
  );
};
