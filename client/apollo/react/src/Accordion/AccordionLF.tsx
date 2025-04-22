import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionLF.scss";
import type { ComponentProps } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import { AccordionTagDateContainer } from "./AccordionTagDateContainerLF";
import { Accordion as AccordionCommon } from "./AccordionCommon";
import { Icon } from "../Icon/IconCommon";

export const Accordion = (
  props: Omit<
    ComponentProps<typeof AccordionCommon>,
    | "AccordionCoreComponent"
    | "AccordionTagDateContainerComponent"
    | "IconComponent"
  >,
) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    AccordionTagDateContainerComponent={AccordionTagDateContainer}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
