import "@axa-fr/design-system-apollo-css/dist/Pagination/ItemPagination/ItemPaginationApollo.css";
import { type ElementType } from "react";
import {
  ItemPaginationCommon,
  type ItemPaginationCommonProps,
} from "./ItemPaginationCommon";

export { type ItemPaginationCommonProps as ItemPaginationProps } from "./ItemPaginationCommon";

export const ItemPagination = <T extends ElementType = "a">(
  props: ItemPaginationCommonProps<T>,
) => <ItemPaginationCommon {...props} />;
