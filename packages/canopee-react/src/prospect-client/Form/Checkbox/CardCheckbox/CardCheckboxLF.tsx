import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { CardCheckboxOption } from "../CardCheckboxOption/CardCheckboxOptionLF";
import { CheckboxText } from "../CheckboxText/CheckboxTextLF";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "./CardCheckboxCommon";

import "@axa-fr/canopee-css/client/Form/Checkbox/CardCheckbox/CardCheckboxLF.css";

export const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    CheckboxTextComponent={CheckboxText}
    ItemMessageComponent={ItemMessage}
  />
);

CardCheckbox.displayName = "CardCheckbox";
