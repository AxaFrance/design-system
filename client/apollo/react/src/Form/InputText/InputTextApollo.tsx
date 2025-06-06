import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputText as InputTextCommon } from "./InputTextCommon";

export const InputText = forwardRef<
  HTMLInputElement,
  Omit<
    ComponentProps<typeof InputTextCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <InputTextCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

InputText.displayName = "InputText";
