import "@axa-fr/design-system-apollo-css/dist/Form/Dropdown/DropdownLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
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
