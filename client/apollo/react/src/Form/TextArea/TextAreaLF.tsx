import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaLF.scss";
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
