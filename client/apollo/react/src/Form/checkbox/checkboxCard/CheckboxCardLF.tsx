import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../checkbox/CheckboxLf";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon {...props} CheckboxComponent={Checkbox} />
);

CheckboxCard.displayName = "CheckboxCard";
