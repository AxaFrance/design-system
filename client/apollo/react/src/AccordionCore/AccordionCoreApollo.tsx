import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreApollo.scss";
import {
  AccordionCoreCommon,
  type AccordionProps,
} from "./AccordionCoreCommon";
import { Icon } from "../Icon/IconApollo";

export const AccordionCore = (props: AccordionProps) => (
  <AccordionCoreCommon IconComponent={Icon} {...props} />
);
