import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextInput as TextInputCommon } from "./TextInputCommon";

export const TextInput = forwardRef<
  HTMLInputElement,
  Omit<
    ComponentProps<typeof TextInputCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <TextInputCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

TextInput.displayName = "TextInput";
