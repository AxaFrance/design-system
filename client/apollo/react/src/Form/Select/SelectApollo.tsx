import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Select as SelectCommon } from "./SelectCommon";
import { SelectAtom } from "../SelectAtom/SelectAtomApollo";

export const Select = forwardRef<
  HTMLSelectElement,
  Omit<
    ComponentProps<typeof SelectCommon>,
    "ItemLabelComponent" | "ItemMessageComponent" | "SelectAtomComponent"
  >
>((props, ref) => (
  <SelectCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    SelectAtomComponent={SelectAtom}
  />
));

Select.displayName = "Select";
