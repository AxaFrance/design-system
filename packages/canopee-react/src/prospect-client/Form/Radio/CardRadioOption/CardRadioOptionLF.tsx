import { Icon } from "../../../Icon/IconLF";
import { Radio } from "../Radio/RadioLF";
import {
  CardRadioOptionCommon,
  type CardRadioOptionProps,
} from "./CardRadioOptionCommon";

import "@axa-fr/canopee-css/client/Form/Radio/CardRadioOption/CardRadioOptionLF.css";

export const CardRadioOption = (props: CardRadioOptionProps) => (
  <CardRadioOptionCommon
    {...props}
    RadioComponent={Radio}
    IconComponent={Icon}
  />
);
