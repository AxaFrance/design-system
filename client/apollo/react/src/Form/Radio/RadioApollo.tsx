import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioApollo.scss";
import { ComponentProps } from "react";
import { Radio as RadioCommon } from "./RadioCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";

export const Radio = (
  props: Omit<ComponentProps<typeof RadioCommon>, "ItemMessageComponent">,
) => {
  return <RadioCommon {...props} ItemMessageComponent={ItemMessage} />;
};
