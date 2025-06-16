import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CardCheckbox/CardCheckboxApollo.scss";
import { Icon } from "../../../Icon/IconApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "./CardCheckboxCommon";

export const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    IconComponent={Icon}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CardCheckbox.displayName = "CardCheckbox";
