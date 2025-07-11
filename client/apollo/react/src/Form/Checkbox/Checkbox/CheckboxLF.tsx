import { forwardRef } from "react";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/Checkbox/CheckboxLF.scss";
import checkBoxIcon from "@material-symbols/svg-400/rounded/check.svg";
import { CheckboxCommon, type CheckboxProps } from "./CheckboxCommon";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => (
    <CheckboxCommon {...props} ref={ref} checkBoxIcon={checkBoxIcon} />
  ),
);

Checkbox.displayName = "Checkbox";
