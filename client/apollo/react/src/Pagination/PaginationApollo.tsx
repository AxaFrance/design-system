import "@axa-fr/design-system-apollo-css/dist/Pagination/PaginationApollo.css";
import { ItemPagination } from "./ItemPagination/ItemPaginationApollo";
import { PaginationCommon, type PaginationProps } from "./PaginationCommon";

export { type PaginationProps } from "./PaginationCommon";

export const Pagination = (props: PaginationProps) => (
  <PaginationCommon {...props} ItemPaginationComponent={ItemPagination} />
);
