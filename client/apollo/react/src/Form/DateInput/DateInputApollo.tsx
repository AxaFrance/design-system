import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputApollo.scss";
import { forwardRef, type ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
