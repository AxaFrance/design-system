import "@axa-fr/canopee-css/client/Form/InputDate/InputDateLF.css";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";

import { InputDateCommon, type InputDateProps } from "./InputDateCommon";

export const InputDate = ({ ...props }: InputDateProps) => (
  <InputDateCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

InputDate.displayName = "InputDate";
