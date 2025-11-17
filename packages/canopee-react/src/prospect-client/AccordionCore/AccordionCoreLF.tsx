import "@axa-fr/canopee-css/client/AccordionCore/AccordionCoreLF.css";
import {
  AccordionCoreCommon,
  type AccordionCoreProps,
} from "./AccordionCoreCommon";
import { Icon } from "../Icon/IconLF";

export const AccordionCore = (props: AccordionCoreProps) => (
  <AccordionCoreCommon IconComponent={Icon} {...props} />
);
