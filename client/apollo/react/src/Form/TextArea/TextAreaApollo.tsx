import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaApollo.css";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
