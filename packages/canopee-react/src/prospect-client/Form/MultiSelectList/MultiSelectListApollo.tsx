import "@axa-fr/canopee-css/prospect/Form/MultiSelectList/MultiSelectListApollo.css";
import { ItemMultiSelect } from "../ItemMultiSelect/ItemMultiSelectApollo";
import {
  MultiSelectListCommon,
  type MultiSelectListProps,
} from "./MultiSelectListCommon";

export type {
  MultiSelectListItem,
  MultiSelectListProps,
} from "./MultiSelectListCommon";

export const MultiSelectList = (props: MultiSelectListProps) => (
  <MultiSelectListCommon
    {...props}
    ItemMultiSelectComponent={ItemMultiSelect}
  />
);
