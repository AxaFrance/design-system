import { Icon } from "../../../Icon/IconLF";
import { Radio } from "../Radio/RadioLF";
import {
  CardRadioOptionCommon,
  type CardRadioOptionProps,
} from "./CardRadioOptionCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/Radio/CardRadioOption/CardRadioOptionLF.scss";

export const CardRadioOption = (props: CardRadioOptionProps) => (
  <CardRadioOptionCommon
    {...props}
    RadioComponent={Radio}
    IconComponent={Icon}
  />
);
