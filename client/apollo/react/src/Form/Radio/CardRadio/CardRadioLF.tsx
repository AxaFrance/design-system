import { CardRadioOption } from "../CardRadioOption/CardRadioOptionLF";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadio/CardRadioLF.scss";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);

CardRadio.displayName = "CardRadio";
