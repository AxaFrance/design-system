import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { CardCheckboxOption } from "../CardCheckboxOption/CardCheckboxOptionLF";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "./CardCheckboxCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CardCheckbox/CardCheckboxLF.scss";

export const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    ItemMessageComponent={ItemMessage}
  />
);

CardCheckbox.displayName = "CardCheckbox";
