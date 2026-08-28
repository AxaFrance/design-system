import "@axa-fr/canopee-css/client/Form/MultiSelectList/MultiSelectListAll.css";
import { ItemMultiSelect } from "../ItemMultiSelect/ItemMultiSelectLF";
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
