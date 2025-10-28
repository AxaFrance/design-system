import { Icon } from "../../../Icon/IconApollo";
import { Radio } from "../Radio/RadioApollo";
import {
  CardRadioOptionCommon,
  type CardRadioOptionProps,
} from "./CardRadioOptionCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadioOption/CardRadioOptionApollo.css";

export const CardRadioOption = (props: CardRadioOptionProps) => (
  <CardRadioOptionCommon
    {...props}
    RadioComponent={Radio}
    IconComponent={Icon}
  />
);
