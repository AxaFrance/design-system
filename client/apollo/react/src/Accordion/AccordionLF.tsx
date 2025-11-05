import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import { Tag } from "../Tag/TagLF";
import { AccordionCommon, type AccordionProps } from "./AccordionCommon";
import { Icon } from "../Icon/IconCommon";
import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionLF.css";

export const Accordion = (props: AccordionProps) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    TagComponent={Tag}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
