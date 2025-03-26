import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputApollo.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
