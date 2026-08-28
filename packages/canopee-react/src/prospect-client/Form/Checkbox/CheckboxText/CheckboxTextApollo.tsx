import "@axa-fr/canopee-css/prospect/Form/Checkbox/CheckboxText/CheckboxTextApollo.css";
import { ItemMessage } from "../../ItemMessage/ItemMessage";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import {
  CheckboxTextCommon,
  type CheckboxTextProps,
} from "./CheckboxTextCommon";

export const CheckboxText = ({ ...props }: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxText.displayName = "CheckboxText";
