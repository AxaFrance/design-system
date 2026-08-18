import "@axa-fr/canopee-css/client/Stepper/StepperLF.css";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageLF";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    ItemMessageComponent={ItemMessage}
  />
);
