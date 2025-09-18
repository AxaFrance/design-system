import "@axa-fr/design-system-apollo-css/dist/Form/Dropdown/DropdownLF.scss";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { DropdownCommon, type DropdownProps } from "./DropdownCommon";

export const Dropdown = (props: DropdownProps) => (
  <DropdownCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
