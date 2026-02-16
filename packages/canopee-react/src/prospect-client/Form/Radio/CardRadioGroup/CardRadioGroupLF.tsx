import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { CardRadioOption } from "../CardRadioOption/CardRadioOptionLF";
import {
  CardRadioGroupCommon,
  type CardRadioGroupProps,
} from "./CardRadioGroupCommon";

import "@axa-fr/canopee-css/client/Form/Radio/CardRadioGroup/CardRadioGroupLF.css";

export const CardRadioGroup = (props: CardRadioGroupProps) => (
  <CardRadioGroupCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);
