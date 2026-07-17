import "@axa-fr/canopee-css/client/Form/ItemMultiSelect/ItemMultiSelectLF.css";
import { Checkbox } from "../Checkbox/Checkbox/CheckboxLF";
import {
  ItemMultiSelectCommon,
  type ItemMultiSelectCommonProps,
} from "./ItemMultiSelectCommon";

export type ItemMultiSelectProps = Omit<ItemMultiSelectCommonProps, "Checkbox">;

export const ItemMultiSelect = (props: ItemMultiSelectProps) => (
  <ItemMultiSelectCommon {...props} Checkbox={Checkbox} />
);

ItemMultiSelect.displayName = "ItemMultiSelect";
