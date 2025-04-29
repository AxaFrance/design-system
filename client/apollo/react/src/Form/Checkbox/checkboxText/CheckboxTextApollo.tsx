import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextApollo.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";

export const CheckboxText = (props: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxText.displayName = "CheckboxText";
