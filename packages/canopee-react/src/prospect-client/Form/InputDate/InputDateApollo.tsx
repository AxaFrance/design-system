import "@axa-fr/canopee-css/prospect/Form/InputDate/InputDateApollo.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputDateCommon, type InputDateProps } from "./InputDateCommon";

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  (props, ref) => (
    <InputDateCommon
      {...props}
      ref={ref}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
    />
  ),
);

InputDate.displayName = "InputDate";
