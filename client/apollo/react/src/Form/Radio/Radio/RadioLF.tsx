import { forwardRef } from "react";
import "@axa-fr/design-system-apollo-css/dist/Form/Radio/Radio/RadioLF.scss";
import { RadioCommon, type RadioProps } from "./RadioCommon";

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => (
  <RadioCommon {...props} ref={ref} />
));

Radio.displayName = "Radio";
