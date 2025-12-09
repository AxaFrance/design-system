import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import {
  AccordionContextualCommon,
  type AccordionContextualProps,
} from "./AccordionContextualCommon";
import { Icon } from "../Icon/IconCommon";
import "@axa-fr/canopee-css/client/AccordionContextual/AccordionContextualLF.css";

export const AccordionContextual = (props: AccordionContextualProps) => (
  <AccordionContextualCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    IconComponent={Icon}
  />
);

export {
  type AccordionContextualVariants,
  accordionContextualVariants,
} from "./AccordionContextualCommon";
