import { ItemMessage } from "../../ItemMessage/ItemMessage";
import { CardRadio } from "../CardRadio/CardRadioLF";
import {
  CardRadioGroupCommon,
  type CardRadioGroupProps,
} from "./CardRadioGroupCommon";

import "@axa-fr/canopee-css/client/Form/Radio/CardRadioGroup/CardRadioGroupLF.css";

export const CardRadioGroup = (props: CardRadioGroupProps) => (
  <CardRadioGroupCommon
    {...props}
    CardRadioComponent={CardRadio}
    ItemMessageComponent={ItemMessage}
  />
);
