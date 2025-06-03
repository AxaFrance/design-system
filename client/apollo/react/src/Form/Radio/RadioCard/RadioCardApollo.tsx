import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioCard/RadioCardApollo.scss";
import { Icon } from "../../../Icon/IconApollo";
import { RadioCardCommon, RadioCardProps } from "./RadioCardCommon";
import { Radio } from "../Radio/RadioApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

export const RadioCard = (props: RadioCardProps) => (
  <RadioCardCommon
    {...props}
    IconComponent={Icon}
    RadioComponent={Radio}
    ItemMessageComponent={ItemMessage}
  />
);

RadioCard.displayName = "RadioCard";
