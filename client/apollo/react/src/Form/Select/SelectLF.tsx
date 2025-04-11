import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Select as SelectCommon } from "./SelectCommon";

export const TextInput = (
  props: Omit<
    ComponentProps<typeof SelectCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >,
) => (
  <SelectCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
