import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectApollo.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
