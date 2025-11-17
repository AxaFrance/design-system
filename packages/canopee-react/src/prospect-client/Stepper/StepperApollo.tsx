import "@axa-fr/canopee-css/prospect/Stepper/StepperApollo.css";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />
);
