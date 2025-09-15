import "@axa-fr/design-system-apollo-css/dist/Form/Dropdown/DropdownApollo.scss";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { DropdownCommon, type DropdownProps } from "./DropdownCommon";

export const Dropdown = (props: DropdownProps) => (
  <DropdownCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
