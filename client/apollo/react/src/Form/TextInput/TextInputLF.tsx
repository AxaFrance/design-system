import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputLF.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
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
