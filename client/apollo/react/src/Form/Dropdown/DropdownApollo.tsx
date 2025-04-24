import "@axa-fr/design-system-apollo-css/dist/Form/Dropdown/DropdownApollo.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Dropdown as DropdownCommon } from "./DropdownCommon";

export const Dropdown = (
  props: Omit<
    ComponentProps<typeof DropdownCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >,
) => (
  <DropdownCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
