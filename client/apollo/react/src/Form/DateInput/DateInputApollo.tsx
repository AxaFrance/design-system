import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputApollo.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
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
