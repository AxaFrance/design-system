import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Select as SelectCommon } from "./SelectCommon";

export const Select = (
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
