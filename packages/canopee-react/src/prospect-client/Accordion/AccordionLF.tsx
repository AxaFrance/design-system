import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer/AccordionTagDateContainerLF";
import { AccordionCommon, type AccordionProps } from "./AccordionCommon";
import { Icon } from "../Icon/IconCommon";
import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionLF.css";

export const Accordion = (props: AccordionProps) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    AccordionTagDateContainerComponent={AccordionTagDateContainer}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
