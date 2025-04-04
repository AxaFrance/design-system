import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperLF.scss";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { Stepper as StepperCommon, StepperProps } from "./Stepper";

export const Stepper = (
  props: Omit<StepperProps, "ProgressBarGroupComponent">,
) => <StepperCommon {...props} ProgressBarGroupComponent={ProgressBarGroup} />;
