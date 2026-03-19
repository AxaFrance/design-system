import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { CardCheckboxOption } from "../CardCheckboxOption/CardCheckboxOptionApollo";
import { CheckboxText } from "../CheckboxText/CheckboxTextApollo";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "./CardCheckboxCommon";

import "@axa-fr/canopee-css/prospect/Form/Checkbox/CardCheckbox/CardCheckboxApollo.css";

export const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    CheckboxTextComponent={CheckboxText}
    ItemMessageComponent={ItemMessage}
  />
);

CardCheckbox.displayName = "CardCheckbox";
