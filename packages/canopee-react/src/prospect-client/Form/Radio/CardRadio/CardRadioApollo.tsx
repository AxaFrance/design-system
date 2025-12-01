import { CardRadioOption } from "../CardRadioOption/CardRadioOptionApollo";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

import "@axa-fr/canopee-css/prospect/Form/Radio/CardRadio/CardRadioApollo.css";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);
