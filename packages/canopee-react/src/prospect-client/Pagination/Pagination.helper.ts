import type { ElementType } from "react";
import type { ItemPaginationCommonProps } from "./ItemPagination/ItemPaginationCommon";
import { ELLIPSIS } from "./ItemPagination/ItemPaginationCommon";

export type getItemsProps = {
  numberPages: number;
  onChangePage: (page: number) => void;
  currentPage: number;
  asItem?: ElementType;
};

const MAX_PAGE = 7;

const ellipsisItem: ItemPaginationCommonProps<ElementType> = {
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
  })) as ItemPaginationCommonProps<ElementType>[];

  if (numberPages <= MAX_PAGE) {
    return items;
  }

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
};
