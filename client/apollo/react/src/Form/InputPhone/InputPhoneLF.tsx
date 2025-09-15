import "@axa-fr/design-system-apollo-css/dist/Form/InputPhone/InputPhoneLF.scss";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { InputPhoneCommon, type InputPhoneProps } from "./InputPhoneCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";
import { Icon } from "../../Icon/IconLF";

export const InputPhone = (props: InputPhoneProps) => (
  <InputPhoneCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextComponent={InputTextAtom}
    IconComponent={Icon}
  />
);
