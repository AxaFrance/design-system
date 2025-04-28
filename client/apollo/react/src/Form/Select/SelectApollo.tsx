import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
