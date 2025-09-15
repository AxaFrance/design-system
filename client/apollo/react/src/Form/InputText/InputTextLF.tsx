import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextLF.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { InputTextCommon, type InputTextProps } from "./InputTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => (
    <InputTextCommon
      {...props}
      ref={ref}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
      InputTextAtomComponent={InputTextAtom}
    />
  ),
);

InputText.displayName = "InputText";
