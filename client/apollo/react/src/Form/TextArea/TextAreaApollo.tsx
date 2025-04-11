import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaApollo.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextArea as TextAreaCommon } from "./TextAreaCommon";

export const TextArea = (
  props: Omit<
    ComponentProps<typeof TextAreaCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >,
) => (
  <TextAreaCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
