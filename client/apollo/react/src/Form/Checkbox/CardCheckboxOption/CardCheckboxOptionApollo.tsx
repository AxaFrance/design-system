import { Icon } from "../../../Icon/IconApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "./CardCheckboxOptionCommon";

import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CardCheckboxOption/CardCheckboxOptionApollo.scss";

export const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);
