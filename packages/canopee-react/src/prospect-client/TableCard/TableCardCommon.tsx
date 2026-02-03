import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";
import { DRow } from "./DRow";
import { Dt } from "./Dt";
import { Dd } from "./Dd";

export type TableCardVariants = "white" | "blue" | "alternate";

export type TableCardProps = ComponentPropsWithRef<"dl"> & {
  variant?: TableCardVariants;
};

export const TableCard = ({
  className,
  children,
  variant = "alternate",
  ...tableCardProps
}: TableCardProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table-card",
    className,
    modifiers: [variant],
  });

  return (
    <dl className={componentClassName} {...tableCardProps}>
      {children}
    </dl>
  );
};

TableCard.DRow = DRow;
TableCard.Dt = Dt;
TableCard.Dd = Dd;
