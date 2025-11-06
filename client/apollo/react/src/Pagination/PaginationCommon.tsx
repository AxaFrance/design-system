import {
  ComponentProps,
  ComponentType,
  ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import chevronBackward from "@material-symbols/svg-400/rounded/chevron_backward.svg";
import chevronForward from "@material-symbols/svg-400/rounded/chevron_forward.svg";
import {
  ItemPagination,
  type ItemPaginationProps,
} from "./ItemPagination/ItemPaginationApollo";

import { ELLIPSIS } from "./ItemPagination/ItemPaginationCommon";
import { getClassName } from "../utilities/getClassName";

import { ClickIcon } from "../ClickIcon/ClickIconApollo";

type getItemsProps = {
  numberPages: number;
  onChangePage: (page: number) => void;
  currentPage: number;
  asItem?: React.ElementType;
};

const MAX_PAGE = 7;

const ellipsisItem: ItemPaginationProps<ElementType> = {
  page: ELLIPSIS,
  isCurrentPage: false,
};

export const getItems = ({
  numberPages,
  currentPage,
  asItem,
  onChangePage,
}: getItemsProps) => {
  const items = Array.from({ length: numberPages }, (_, index) => ({
    page: index + 1,
    isCurrentPage: index + 1 === currentPage,
    as: asItem,
    onClick: () => onChangePage(index + 1),
  })) as ItemPaginationProps<ElementType>[];

  if (numberPages > MAX_PAGE) {
    if (currentPage && currentPage < MAX_PAGE - 1) {
      return items.toSpliced(
        MAX_PAGE - 1,
        numberPages - 1,
        ellipsisItem,
        items[numberPages - 1],
      );
    }

    if (currentPage && currentPage > numberPages - (MAX_PAGE - 2)) {
      return [
        items[0],
        ellipsisItem,
        ...items.toSpliced(0, numberPages - (MAX_PAGE - 1)),
      ];
    }

    return [
      items[0],
      ellipsisItem,
      ...items.toSpliced(0, currentPage - 2).toSpliced(3, numberPages - 1),
      ellipsisItem,
      items[numberPages - 1],
    ];
  }

  return items;
};

export type PaginationProps = getItemsProps &
  ComponentPropsWithoutRef<"nav"> & {
    hidePrevNext?: boolean;
  };

type PaginationCommonProps = PaginationProps & {
  ItemPaginationComponent: ComponentType<ComponentProps<typeof ItemPagination>>;
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
      <ul className="af-pagination-list">
        <li>
          <ClickIcon
            src={chevronBackward}
            onClick={() => onChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Page précédente"
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
          />
        </li>
      </ul>
    </nav>
  );
};
