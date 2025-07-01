import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreLF.scss";
import {
  AccordionCoreCommon,
  type AccordionProps,
} from "./AccordionCoreCommon";
import { Icon } from "../Icon/IconLF";

export const AccordionCore = (props: AccordionProps) => (
  <AccordionCoreCommon IconComponent={Icon} {...props} />
);
