import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextLF.scss";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";
import { Checkbox } from "../checkbox/CheckboxLf";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

export const CheckboxText = (props: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxText.displayName = "CheckboxText";
