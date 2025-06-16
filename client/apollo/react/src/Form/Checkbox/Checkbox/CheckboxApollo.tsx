import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/Checkbox/CheckboxApollo.scss";
import checkBoxIcon from "@material-symbols/svg-400/rounded/check_small.svg";
import { CheckboxCommon, CheckboxProps } from "./CheckboxCommon";

export const Checkbox = (props: CheckboxProps) => (
  <CheckboxCommon {...props} checkBoxIcon={checkBoxIcon} />
);

Checkbox.displayName = "Checkbox";
