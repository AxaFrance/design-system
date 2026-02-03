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
  ...DRowProps
}: TrProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-card__drow",
    className,
    modifiers: [direction],
  });
  return (
    <div className={componentClassName} {...DRowProps}>
      {children}
    </div>
  );
};
