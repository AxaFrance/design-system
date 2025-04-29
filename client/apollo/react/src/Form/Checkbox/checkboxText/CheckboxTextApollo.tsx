import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextApollo.scss";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";
import { Checkbox } from "../checkbox/CheckboxApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";

export const CheckboxText = (props: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxText.displayName = "CheckboxText";
