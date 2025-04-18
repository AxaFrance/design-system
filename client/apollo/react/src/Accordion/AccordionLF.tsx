import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionLF.scss";
import type { ComponentProps } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import { Accordion as AccordionCommon } from "./AccordionCommon";

export const Accordion = (
  props: Omit<ComponentProps<typeof AccordionCommon>, "AccordionCoreComponent">,
) => <AccordionCommon {...props} AccordionCoreComponent={AccordionCore} />;
