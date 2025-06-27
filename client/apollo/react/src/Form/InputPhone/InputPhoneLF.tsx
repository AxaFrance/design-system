import "@axa-fr/design-system-apollo-css/dist/Form/InputPhone/InputPhoneLF.scss";
import type { ComponentProps } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { InputPhone as InputPhoneCommon } from "./InputPhoneCommon";
import { InputTextAtom } from "../InputTextAtom/InputTextAtomLF";
import { Icon } from "../../Icon/IconLF";

export const InputPhone = (
  props: Omit<
    ComponentProps<typeof InputPhoneCommon>,
    | "ItemLabelComponent"
    | "ItemMessageComponent"
    | "InputTextComponent"
    | "IconComponent"
  >,
) => (
  <InputPhoneCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
    InputTextComponent={InputTextAtom}
    IconComponent={Icon}
  />
);
