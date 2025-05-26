import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardApollo.scss";
import { Icon } from "../../../Icon/IconApollo";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import { CheckboxCardCommon, CheckboxCardProps } from "./CheckboxCardCommon";

export const CheckboxCard = (props: CheckboxCardProps) => (
  <CheckboxCardCommon
    {...props}
    IconComponent={Icon}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

CheckboxCard.displayName = "CheckboxCard";
