import "@axa-fr/canopee-css/client/Form/InputText/InputTextLF.css";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { InputTextCommon, type InputTextProps } from "./InputTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";

export const InputText = ({ ...props }: InputTextProps) => (
  <InputTextCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextAtomComponent={InputTextAtom}
  />
);

InputText.displayName = "InputText";
