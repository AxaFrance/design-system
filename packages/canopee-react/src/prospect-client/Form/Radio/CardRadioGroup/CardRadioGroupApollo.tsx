import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { CardRadioOption } from "../CardRadioOption/CardRadioOptionApollo";
import {
  CardRadioGroupCommon,
  type CardRadioGroupProps,
} from "./CardRadioGroupCommon";

import "@axa-fr/canopee-css/prospect/Form/Radio/CardRadioGroup/CardRadioGroupApollo.css";

export const CardRadioGroup = (props: CardRadioGroupProps) => (
  <CardRadioGroupCommon
    {...props}
    CardRadioOptionComponent={CardRadioOption}
    ItemMessageComponent={ItemMessage}
  />
);
