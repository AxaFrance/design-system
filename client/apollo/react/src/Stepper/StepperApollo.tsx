import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperApollo.scss";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { Stepper as StepperCommon, StepperProps } from "./Stepper";

export const Stepper = (props: StepperProps) => (
  <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />
);
