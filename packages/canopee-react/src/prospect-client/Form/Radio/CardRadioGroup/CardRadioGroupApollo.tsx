import { ItemMessage } from "../../ItemMessage/ItemMessage";
import { CardRadio } from "../CardRadio/CardRadioApollo";
import {
  CardRadioGroupCommon,
  type CardRadioGroupProps,
} from "./CardRadioGroupCommon";

import "@axa-fr/canopee-css/prospect/Form/Radio/CardRadioGroup/CardRadioGroupApollo.css";

export const CardRadioGroup = (props: CardRadioGroupProps) => (
  <CardRadioGroupCommon
    {...props}
    CardRadioComponent={CardRadio}
    ItemMessageComponent={ItemMessage}
  />
);
