import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { Checkbox } from "../Checkbox/CheckboxLf";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon
    {...props}
    IconComponent={Icon}
    CheckboxComponent={Checkbox}
  />
);

CheckboxCard.displayName = "CheckboxCard";
