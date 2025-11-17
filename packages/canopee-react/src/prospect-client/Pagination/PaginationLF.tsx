import "@axa-fr/canopee-css/client/Pagination/PaginationLF.css";
import { ItemPagination } from "./ItemPagination/ItemPaginationLF";
import { PaginationCommon, type PaginationProps } from "./PaginationCommon";

export { type PaginationProps } from "./PaginationCommon";

export const Pagination = (props: PaginationProps) => (
  <PaginationCommon {...props} ItemPaginationComponent={ItemPagination} />
);
