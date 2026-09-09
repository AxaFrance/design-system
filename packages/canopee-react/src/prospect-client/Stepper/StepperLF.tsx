import "@axa-fr/canopee-css/client/Stepper/StepperLF.css";
import { Heading } from "../Heading/HeadingLF";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    HeadingComponent={Heading}
  />
);
