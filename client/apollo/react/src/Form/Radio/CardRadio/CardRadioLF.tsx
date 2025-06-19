import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadio/CardRadioLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { CardRadioCommon, CardRadioProps } from "./CardRadioCommon";
import { Radio } from "../Radio/RadioLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon
    {...props}
    IconComponent={Icon}
    RadioComponent={Radio}
    ItemMessageComponent={ItemMessage}
  />
);

CardRadio.displayName = "CardRadio";
