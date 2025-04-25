import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextArea as TextAreaCommon } from "./TextAreaCommon";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  Omit<
    ComponentProps<typeof TextAreaCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <TextAreaCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

TextArea.displayName = "TextArea";
