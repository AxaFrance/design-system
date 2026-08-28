import "@axa-fr/canopee-css/client/Stepper/StepperLF.css";
import { ItemMessage } from "../Form/ItemMessage/ItemMessage";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    ItemMessageComponent={ItemMessage}
  />
);
