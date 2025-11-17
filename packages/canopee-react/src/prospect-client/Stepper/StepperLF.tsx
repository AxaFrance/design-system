import "@axa-fr/canopee-css/client/Stepper/StepperLF.css";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />
);
