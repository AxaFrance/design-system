import {
  ComponentProps,
  ComponentType,
  type ComponentPropsWithoutRef,
} from "react";
import chevronBackward from "@material-symbols/svg-400/rounded/chevron_backward.svg";
import chevronForward from "@material-symbols/svg-400/rounded/chevron_forward.svg";
import { getClassName } from "../utilities/getClassName";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";
import {
  ItemPaginationCommon,
  ELLIPSIS,
} from "./ItemPagination/ItemPaginationCommon";
import { getItems, type getItemsProps } from "./Pagination.helper";

export type PaginationProps = getItemsProps &
  ComponentPropsWithoutRef<"nav"> & {
    hidePrevNext?: boolean;
    prevButtonProps?: ComponentProps<typeof ClickIcon>;
    nextButtonProps?: ComponentProps<typeof ClickIcon>;
  };

type PaginationCommonProps = PaginationProps & {
  ItemPaginationComponent: ComponentType<
    ComponentProps<typeof ItemPaginationCommon>
  >;
};

export const PaginationCommon = ({
  numberPages = 1,
  onChangePage,
  className,
  currentPage = 1,
  asItem,
  hidePrevNext = false,
  "aria-label": ariaLabel = "Pagination",
  ItemPaginationComponent,
  prevButtonProps,
  nextButtonProps,
}: PaginationCommonProps) => {
  const items = getItems({
    numberPages,
    currentPage,
    asItem,
    onChangePage,
  });

  return (
    <nav
      className={getClassName({
        baseClassName: "af-pagination",
        className,
        modifiers: [hidePrevNext ? "hide-prev-next" : undefined],
      })}
      aria-label={ariaLabel}
    >
      <ol className="af-pagination-list">
        <li>
          <ClickIcon
            src={chevronBackward}
            onClick={() => onChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Page précédente"
            {...prevButtonProps}
          />
        </li>
        <li>
          <span className="af-pagination-counter">{`Page ${currentPage} sur ${numberPages}`}</span>
        </li>
        {items.map((item, index) => (
          <li key={item.page === ELLIPSIS ? `ellipsis-${index}` : item.page}>
            <ItemPaginationComponent {...item} />
          </li>
        ))}
        <li>
          <ClickIcon
            src={chevronForward}
            onClick={() => onChangePage(currentPage + 1)}
            disabled={currentPage === numberPages}
            aria-label="Page suivante"
            {...nextButtonProps}
          />
        </li>
      </ol>
    </nav>
  );
};
