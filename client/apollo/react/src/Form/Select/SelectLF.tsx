import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectLF.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Select as SelectCommon } from "./SelectCommon";
import { SelectAtom } from "../SelectAtom/SelectAtomLF";

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
