import "@axa-fr/canopee-css/client/Form/TextArea/TextAreaLF.css";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { TextAreaCommon, type TextAreaProps } from "./TextAreaCommon";

export const TextArea = ({ ...props }: TextAreaProps) => (
  <TextAreaCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

TextArea.displayName = "TextArea";
