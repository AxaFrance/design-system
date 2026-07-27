import "@axa-fr/canopee-css/client/Form/Checkbox/CheckboxText/CheckboxTextLF.css";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
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
