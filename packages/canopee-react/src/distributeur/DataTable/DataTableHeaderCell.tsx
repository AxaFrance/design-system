import { flexRender } from "@tanstack/react-table";
import type { Header } from "@tanstack/react-table";
import arrowDropDown from "@material-symbols/svg-400/outlined/arrow_drop_down.svg";
import arrowDropUp from "@material-symbols/svg-400/outlined/arrow_drop_up.svg";
import unfoldMore from "@material-symbols/svg-400/outlined/unfold_more.svg";
import { Svg } from "../Svg";
import { Button } from "../Button/Button";

const sortIconBySortState: Record<string, string> = {
  asc: arrowDropUp,
  desc: arrowDropDown,
};

export const DataTableHeaderCell = ({
  header,
  enableSorting,
}: {
  header: Header<unknown, unknown>;
  enableSorting?: boolean;
}) => {
  if (header.isPlaceholder) {
    return null;
  }

  if (enableSorting && header.column.getCanSort()) {
    return (
      <div className="af-datatable__th-wrapper">
        <div className="af-datatable__th-content">
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        {(() => {
          const sortedIcon =
            sortIconBySortState[header.column.getIsSorted() as string] ??
            unfoldMore;

          return (
            <div className="af-datatable__th-sort-icon">
              <Button
                variant="ghost-reverse"
                small
                onClick={header.column.getToggleSortingHandler()}
                aria-label={`Trier par ${header.column.id}`}
              >
                <Svg src={sortedIcon} fill="white" />
              </Button>
            </div>
          );
        })()}
      </div>
    );
  }

  return flexRender(header.column.columnDef.header, header.getContext());
};
