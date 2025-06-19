import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadio/CardRadioApollo.scss";
import { Icon } from "../../../Icon/IconApollo";
import { CardRadioCommon, CardRadioProps } from "./CardRadioCommon";
import { Radio } from "../Radio/RadioApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    IconComponent={Icon}
    RadioComponent={Radio}
    ItemMessageComponent={ItemMessage}
  />
);

CardRadio.displayName = "CardRadio";
