import "@axa-fr/design-system-apollo-css/dist/Form/InputPhone/InputPhoneApollo.css";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputPhoneCommon, type InputPhoneProps } from "./InputPhoneCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomApollo";
import { Icon } from "../../Icon/IconApollo";

export const InputPhone = (props: InputPhoneProps) => (
  <InputPhoneCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextComponent={InputTextAtom}
    IconComponent={Icon}
  />
);
