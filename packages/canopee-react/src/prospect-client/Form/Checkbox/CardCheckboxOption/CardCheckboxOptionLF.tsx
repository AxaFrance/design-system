import { Icon } from "../../../Icon/IconLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "./CardCheckboxOptionCommon";

import "@axa-fr/canopee-css/client/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionLF.css";

export const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);
