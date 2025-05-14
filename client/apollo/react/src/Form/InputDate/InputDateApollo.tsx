import "@axa-fr/design-system-apollo-css/dist/Form/InputDate/InputDateApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
