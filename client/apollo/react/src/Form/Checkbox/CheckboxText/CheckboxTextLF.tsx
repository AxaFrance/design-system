import { forwardRef } from "react";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextLF.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";

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
