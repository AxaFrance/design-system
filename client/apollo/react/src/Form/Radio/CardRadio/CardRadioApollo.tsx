import { CardRadioOption } from "../CardRadioOption/CardRadioOptionApollo";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadio/CardRadioApollo.scss";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);

CardRadio.displayName = "CardRadio";
