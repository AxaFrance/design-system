import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
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
