import "@axa-fr/canopee-css/prospect/Form/Radio/RadioText/RadioTextAll.css";
import { forwardRef } from "react";
import { Radio } from "../Radio/RadioApollo";
import { RadioTextCommon, type RadioTextProps } from "./RadioTextCommon";

export const RadioText = forwardRef<HTMLInputElement, RadioTextProps>(
  (props, ref) => (
    <RadioTextCommon {...props} ref={ref} RadioComponent={Radio} />
  ),
);

RadioText.displayName = "RadioText";
