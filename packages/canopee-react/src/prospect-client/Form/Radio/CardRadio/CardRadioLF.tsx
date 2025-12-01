import { CardRadioOption } from "../CardRadioOption/CardRadioOptionLF";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

import "@axa-fr/canopee-css/client/Form/Radio/CardRadio/CardRadioLF.css";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);
