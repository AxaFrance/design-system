import "@axa-fr/canopee-css/prospect/Form/TextArea/TextAreaApollo.css";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextAreaCommon, type TextAreaProps } from "./TextAreaCommon";

export const TextArea = ({ ...props }: TextAreaProps) => (
  <TextAreaCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

TextArea.displayName = "TextArea";
