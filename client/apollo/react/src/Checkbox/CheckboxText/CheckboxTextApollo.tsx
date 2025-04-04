import "@axa-fr/design-system-apollo-css/dist/Checkbox/CheckboxApollo.scss";
import { CheckboxTextCommon, CheckboxTextProps } from "./CheckboxTextCommon";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageApollo";

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
