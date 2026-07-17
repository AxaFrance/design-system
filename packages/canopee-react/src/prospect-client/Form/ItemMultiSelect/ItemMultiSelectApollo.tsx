import "@axa-fr/canopee-css/prospect/Form/ItemMultiSelect/ItemMultiSelectApollo.css";
import { Checkbox } from "../Checkbox/Checkbox/CheckboxApollo";
import {
  ItemMultiSelectCommon,
  type ItemMultiSelectCommonProps,
} from "./ItemMultiSelectCommon";

export type ItemMultiSelectProps = Omit<ItemMultiSelectCommonProps, "Checkbox">;

export const ItemMultiSelect = (props: ItemMultiSelectProps) => (
  <ItemMultiSelectCommon {...props} Checkbox={Checkbox} />
);

ItemMultiSelect.displayName = "ItemMultiSelect";
