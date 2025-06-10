import "@axa-fr/design-system-apollo-css/dist/Form/InputText/InputTextLF.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { InputText as InputTextCommon } from "./InputTextCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";

export const InputText = forwardRef<
  HTMLInputElement,
  Omit<
    ComponentProps<typeof InputTextCommon>,
    "ItemLabelComponent" | "ItemMessageComponent" | "InputTextAtomComponent"
  >
>((props, ref) => (
  <InputTextCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextAtomComponent={InputTextAtom}
  />
));

InputText.displayName = "InputText";
