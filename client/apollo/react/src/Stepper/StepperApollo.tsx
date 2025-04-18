import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperApollo.scss";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { Stepper as StepperCommon, StepperProps } from "./StepperCommon";

export const Stepper = (
  props: Omit<StepperProps, "ProgressBarGroupComponent">,
) => <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />;
