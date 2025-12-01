import "@axa-fr/canopee-css/client/Form/TextArea/TextAreaLF.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { TextAreaCommon, type TextAreaProps } from "./TextAreaCommon";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => (
    <TextAreaCommon
      {...props}
      ref={ref}
      ItemLabelComponent={ItemLabel}
      ItemMessageComponent={ItemMessage}
    />
  ),
);

TextArea.displayName = "TextArea";
