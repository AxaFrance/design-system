import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";
import { DRow } from "./DRow";
import { Dt } from "./Dt";
import { Dd } from "./Dd";

export type TableMobileCardVariants = "white" | "blue" | "alternate";

export type TableMobileCardProps = ComponentPropsWithRef<"dl"> & {
  variant?: TableMobileCardVariants;
};

export const TableMobileCard = ({
  className,
  children,
  variant = "alternate",
  ...tableCardProps
}: TableMobileCardProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-mobile-card",
    className,
    modifiers: [variant],
  });

  return (
    <dl className={componentClassName} {...tableCardProps}>
      {children}
    </dl>
  );
};

TableMobileCard.DRow = DRow;
TableMobileCard.Dt = Dt;
TableMobileCard.Dd = Dd;
