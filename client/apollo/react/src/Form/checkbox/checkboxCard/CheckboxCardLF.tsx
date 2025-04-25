import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../checkbox/CheckboxLf";
import { Icon } from "../../../Icon/IconLF";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon
    {...props}
    IconComponent={Icon}
    CheckboxComponent={Checkbox}
  />
);

CheckboxCard.displayName = "CheckboxCard";
