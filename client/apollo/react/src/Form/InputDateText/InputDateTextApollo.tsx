import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextApollo.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import {
  InputDateTextCommon,
  type InputDateTextProps,
} from "./InputDateTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomApollo";

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
