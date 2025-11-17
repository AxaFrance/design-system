import { forwardRef } from "react";
import "@axa-fr/canopee-css/client/Form/Checkbox/CheckboxText/CheckboxTextLF.css";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
import {
  CheckboxTextCommon,
  type CheckboxTextProps,
} from "./CheckboxTextCommon";

export const CheckboxText = forwardRef<HTMLInputElement, CheckboxTextProps>(
  (props, ref) => (
    <CheckboxTextCommon
      {...props}
      ref={ref}
      CheckboxComponent={Checkbox}
      ItemMessageComponent={ItemMessage}
    />
  ),
);

CheckboxText.displayName = "CheckboxText";
