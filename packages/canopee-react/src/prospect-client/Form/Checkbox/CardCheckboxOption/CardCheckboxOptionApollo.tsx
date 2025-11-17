import { Icon } from "../../../Icon/IconApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "./CardCheckboxOptionCommon";

import "@axa-fr/canopee-css/prospect/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo.css";

export const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);
