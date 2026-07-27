import { Icon } from "../../../Icon/IconApollo";
import { Radio } from "../Radio/RadioApollo";
import { CardRadioCommon, type CardRadioProps } from "./CardRadioCommon";

import "@axa-fr/canopee-css/prospect/Form/Radio/CardRadio/CardRadioApollo.css";

export const CardRadio = (props: CardRadioProps) => (
  <CardRadioCommon {...props} RadioComponent={Radio} IconComponent={Icon} />
);
