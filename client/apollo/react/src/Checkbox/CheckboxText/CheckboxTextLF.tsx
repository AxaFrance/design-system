import "@axa-fr/design-system-apollo-css/dist/Checkbox/CheckboxText/CheckboxTextLF.scss";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";
import { Checkbox } from "../Checkbox/CheckboxLf";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageLF";

export const CheckboxText = (props: CheckboxTextProps) => {
  return (
    <CheckboxTextCommon
      {...props}
      CheckboxComponent={Checkbox}
      ItemMessageComponent={ItemMessage}
    />
  );
};

CheckboxText.displayName = "CheckboxText";
