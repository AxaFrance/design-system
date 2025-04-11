import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
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
