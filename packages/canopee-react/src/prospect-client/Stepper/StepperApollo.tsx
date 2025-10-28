import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperApollo.css";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />
);
