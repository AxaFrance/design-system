import "@axa-fr/design-system-apollo-css/dist/Form/InputDate/InputDateLF.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";

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
