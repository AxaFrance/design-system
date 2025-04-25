import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardApollo.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../checkbox/CheckboxApollo";
import { Icon } from "../../../Icon/IconApollo";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon
    {...props}
    IconComponent={Icon}
    CheckboxComponent={Checkbox}
  />
);

CheckboxCard.displayName = "CheckboxCard";
