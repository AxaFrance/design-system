import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { TBody } from "./TBody";
import { THead } from "./THead";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr } from "./Tr";

import "@axa-fr/canopee-css/distributeur/Table/Table.css";

type TableProps = ComponentPropsWithoutRef<"table"> & {};

const Table = ({ className, children, ...othersProps }: TableProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-table",
    modifiers: [],
    className,
  });
  return (
    <table className={componentClassName} {...othersProps}>
      {children}
    </table>
  );
};

Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export { Table };
