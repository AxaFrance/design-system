import "@axa-fr/canopee-css/prospect/Form/MultiSelectList/MultiSelectListAll.css";
import { ItemMultiSelect } from "../ItemMultiSelect/ItemMultiSelectApollo";
import {
  MultiSelectListCommon,
  type MultiSelectListProps,
} from "./MultiSelectListCommon";

export type { MultiSelectListProps } from "./MultiSelectListCommon";

export const MultiSelectList = (props: MultiSelectListProps) => (
  <MultiSelectListCommon
    {...props}
    ItemMultiSelectComponent={ItemMultiSelect}
  />
);
