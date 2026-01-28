import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";
import { Td } from "./Td";
import { Tr, rowSizeVariants, type RowSizeVariants } from "./Tr";
import { Th } from "./Th";
import { TBody, bodyColorVariants, type BodyColorVariants } from "./TBody";
import { THead, headColorVariants, type HeadColorVariants } from "./THead";

export type { HeadColorVariants, BodyColorVariants, RowSizeVariants };
export { headColorVariants, bodyColorVariants, rowSizeVariants };

export type TableProps = ComponentPropsWithRef<"table">;

export const Table = ({ className, children, ...tableProps }: TableProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table",
    className,
  });
  return (
    <table className={componentClassName} {...tableProps}>
      {children}
    </table>
  );
};

Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;
