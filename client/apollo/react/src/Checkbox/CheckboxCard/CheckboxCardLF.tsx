import "@axa-fr/design-system-apollo-css/dist/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../Checkbox/CheckboxLf";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageCommon";

export const CheckboxCard = (props: CheckboxCardProps) => {
  return (
    <CheckboxCardCommon
      {...props}
      CheckboxComponent={Checkbox}
      ItemMessageComponent={ItemMessage}
    />
  );
};

CheckboxCard.displayName = "CheckboxCard";
