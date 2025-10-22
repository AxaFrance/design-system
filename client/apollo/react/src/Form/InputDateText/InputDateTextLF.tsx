import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextLF.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import {
  InputDateTextCommon,
  type InputDateTextProps,
} from "./InputDateTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";

export const InputDateText = forwardRef<HTMLInputElement, InputDateTextProps>(
  (props, ref) => (
    <InputDateTextCommon
      {...props}
      ref={ref}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
      InputTextAtomComponent={InputTextAtom}
    />
  ),
);

InputDateText.displayName = "InputDateText";
