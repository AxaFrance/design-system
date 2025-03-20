import "@axa-fr/design-system-apollo-css/dist/Checkbox/CheckboxApollo.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_small.svg";
import { forwardRef } from "react";
import { CheckboxCommon, CheckboxProps } from "./CheckboxCommon";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <CheckboxCommon {...props} ref={ref} checkBoxIcon={checkBoxIcon} />;
  },
);
Checkbox.displayName = "Checkbox";
