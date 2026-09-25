import "@axa-fr/canopee-css/prospect/Form/InputDate/InputDateApollo.css";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessage";
import { InputDateCommon, type InputDateProps } from "./InputDateCommon";

export const InputDate = ({ ...props }: InputDateProps) => (
  <InputDateCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

InputDate.displayName = "InputDate";
