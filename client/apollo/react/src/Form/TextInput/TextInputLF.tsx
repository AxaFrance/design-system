import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { TextInput as TextInputCommon } from "./TextInputCommon";

export const TextInput = (
  props: Omit<
    ComponentProps<typeof TextInputCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >,
) => (
  <TextInputCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
