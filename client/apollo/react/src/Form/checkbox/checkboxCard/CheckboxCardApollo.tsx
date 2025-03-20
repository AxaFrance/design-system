import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardApollo.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../checkbox/CheckboxApollo";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon {...props} CheckboxComponent={Checkbox} />
);

CheckboxCard.displayName = "CheckboxCard";
