import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CardCheckbox/CardCheckboxLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
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
