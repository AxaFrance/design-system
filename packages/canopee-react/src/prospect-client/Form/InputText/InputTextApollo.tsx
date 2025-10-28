import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextApollo.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputTextCommon, type InputTextProps } from "./InputTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomApollo";

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
