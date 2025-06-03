import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioCard/RadioCardLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { RadioCardCommon, RadioCardProps } from "./RadioCardCommon";
import { Radio } from "../Radio/RadioLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

export const RadioCard = (props: RadioCardProps) => (
  <RadioCardCommon
    {...props}
    IconComponent={Icon}
    RadioComponent={Radio}
    ItemMessageComponent={ItemMessage}
  />
);

RadioCard.displayName = "RadioCard";
