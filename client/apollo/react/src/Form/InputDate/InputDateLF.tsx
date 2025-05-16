import "@axa-fr/design-system-apollo-css/dist/Form/InputDate/InputDateLF.scss";
import { ComponentProps, forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { InputDate as InputDateCommon } from "./InputDateCommon";

export const InputDate = forwardRef<
  HTMLInputElement,
  Omit<
    ComponentProps<typeof InputDateCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <InputDateCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

InputDate.displayName = "InputDate";
