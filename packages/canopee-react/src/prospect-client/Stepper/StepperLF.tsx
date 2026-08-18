import "@axa-fr/canopee-css/client/Stepper/StepperLF.css";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { StepperCommon, type StepperProps } from "./StepperCommon";
import { Heading } from "../Heading/HeadingLF";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageLF";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    HeadingComponent={Heading}
    ItemMessageComponent={ItemMessage}
  />
);
