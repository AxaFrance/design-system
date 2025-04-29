import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextLF.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLf";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";

export const CheckboxText = (props: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxText.displayName = "CheckboxText";
