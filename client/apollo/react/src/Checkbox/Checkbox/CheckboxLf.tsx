import "@axa-fr/design-system-apollo-css/dist/Checkbox/Checkbox/CheckboxLF.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check.svg";
import { CheckboxCommon, CheckboxProps } from "./CheckboxCommon";

export const Checkbox = (props: CheckboxProps) => {
  return <CheckboxCommon {...props} checkBoxIcon={checkBoxIcon} />;
};

Checkbox.displayName = "Checkbox";
