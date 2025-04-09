import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioLF.scss";

import { ComponentProps } from "react";
import { Radio as RadioCommon } from "./RadioCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";

export const Radio = (
  props: Omit<
    ComponentProps<typeof RadioCommon>,
    "ItemMessageComponent" | "IconComponent"
  >,
) => {
  return <RadioCommon {...props} ItemMessageComponent={ItemMessage} />;
};
