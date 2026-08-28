import "@axa-fr/canopee-css/client/Form/Dropdown/DropdownLF.css";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessage";
import { DropdownCommon, type DropdownProps } from "./DropdownCommon";

export const Dropdown = (props: DropdownProps) => (
  <DropdownCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
