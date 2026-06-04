import "@axa-fr/canopee-css/client/Form/Radio/RadioText/RadioTextAll.css";
import { forwardRef } from "react";
import { Radio } from "../Radio/RadioLF";
import { RadioTextCommon, type RadioTextProps } from "./RadioTextCommon";

export const RadioText = forwardRef<HTMLInputElement, RadioTextProps>(
  (props, ref) => (
    <RadioTextCommon {...props} ref={ref} RadioComponent={Radio} />
  ),
);

RadioText.displayName = "RadioText";
