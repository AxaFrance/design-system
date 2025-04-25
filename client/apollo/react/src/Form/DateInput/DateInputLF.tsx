import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputLF.scss";
import { ComponentProps, forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { DateInput as DateInputCommon } from "./DateInputCommon";

export const DateInput = forwardRef<
  HTMLInputElement,
  Omit<
    ComponentProps<typeof DateInputCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >
>((props, ref) => (
  <DateInputCommon
    {...props}
    ref={ref}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
));

DateInput.displayName = "DateInput";
