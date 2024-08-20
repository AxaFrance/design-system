import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../Form/core";
import { TBody } from "./TBody";
import { THead } from "./THead";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr } from "./Tr";

import "@axa-fr/design-system-slash-css/dist/Table/Table.scss";

type TableProps = ComponentPropsWithoutRef<"table"> & {
  classModifier?: string;
};

const Table = ({
  className,
  classModifier,
  children,
  ...othersProps
}: TableProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-table",
  );
  return (
    <table className={componentClassName} {...othersProps}>
      {children}
    </table>
  );
};

/**
 * @deprecated Use Table.THead instead
 */
Table.Header = THead;
/**
 * @deprecated Use Table.TBody instead
 */
Table.Body = TBody;
Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export { Table };
