import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputLF.scss";
import { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { DateInput as DateInputCommon } from "./DateInputCommon";

export const DateInput = (
  props: Omit<
    ComponentProps<typeof DateInputCommon>,
    "ItemLabelComponent" | "ItemMessageComponent"
  >,
) => (
  <DateInputCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);
