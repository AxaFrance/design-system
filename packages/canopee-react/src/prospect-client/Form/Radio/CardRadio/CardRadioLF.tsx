import { Icon } from "../../../Icon/IconLF";
import { Radio } from "../Radio/RadioLF";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";

import "@axa-fr/canopee-css/client/Form/Radio/CardRadio/CardRadioLF.css";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon {...props} RadioComponent={Radio} IconComponent={Icon} />
);
