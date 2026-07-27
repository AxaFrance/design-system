import "@axa-fr/canopee-css/prospect/Form/InputText/InputTextApollo.css";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputTextCommon, type InputTextProps } from "./InputTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomApollo";

export const InputText = ({ ...props }: InputTextProps) => (
  <InputTextCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextAtomComponent={InputTextAtom}
  />
);

InputText.displayName = "InputText";
