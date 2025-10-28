import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { CardCheckboxOption } from "../CardCheckboxOption/CardCheckboxOptionApollo";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "./CardCheckboxCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CardCheckbox/CardCheckboxApollo.css";

export const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    ItemMessageComponent={ItemMessage}
  />
);

CardCheckbox.displayName = "CardCheckbox";
