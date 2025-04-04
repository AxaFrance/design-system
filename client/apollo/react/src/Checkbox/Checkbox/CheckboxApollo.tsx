import checkBoxIcon from "@material-symbols/svg-400/outlined/check_small.svg";
import { CheckboxCommon, CheckboxProps } from "./CheckboxCommon";

export const Checkbox = (props: CheckboxProps) => {
  return <CheckboxCommon {...props} checkBoxIcon={checkBoxIcon} />;
};

Checkbox.displayName = "Checkbox";
