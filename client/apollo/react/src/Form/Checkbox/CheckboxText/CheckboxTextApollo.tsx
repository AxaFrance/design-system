import { forwardRef } from "react";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextApollo.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
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
