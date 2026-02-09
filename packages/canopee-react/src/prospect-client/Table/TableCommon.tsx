import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/getClassName";
import { Td } from "./Td";
import { Tr, type RowSizeVariants } from "./Tr";
import { Th } from "./Th";
import { TBody, type BodyColorVariants } from "./TBody";
import { THead, type HeadColorVariants } from "./THead";

export type { HeadColorVariants, BodyColorVariants, RowSizeVariants };
export type TableProps = ComponentPropsWithRef<"table">;

export const Table = ({ className, children, ...tableProps }: TableProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table",
    className,
  });
  return (
    <div className="table-scroll">
      <table className={componentClassName} {...tableProps}>
        {children}
      </table>
    </div>
  );
};

Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;
