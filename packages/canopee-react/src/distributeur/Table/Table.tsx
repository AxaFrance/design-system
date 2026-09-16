import type { ComponentPropsWithoutRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";
import { TBody } from "./TBody";
import { THead } from "./THead";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr } from "./Tr";

import "@axa-fr/canopee-css/distributeur/Table/Table.css";

const Table = ({
  className,
  children,
  ...othersProps
}: ComponentPropsWithoutRef<"table">) => {
  const componentClassName = getClassName({
    baseClassName: "af-table",
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
