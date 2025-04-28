import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectLF.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Select as SelectCommon } from "./SelectCommon";

export const Select = forwardRef<
  HTMLSelectElement,
  Omit<
    ComponentProps<typeof SelectCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <SelectCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

Select.displayName = "Select";
