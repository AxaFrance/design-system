import "@axa-fr/design-system-apollo-css/dist/Checkbox/CheckboxCard/CheckboxCardApollo.scss";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";
import { Checkbox } from "../Checkbox/CheckboxApollo";
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
