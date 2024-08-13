import "@axa-fr/design-system-look-and-feel-css/dist/Accordion/Accordion.client.scss";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ children }: React.PropsWithChildren) => {
  return <div className="af-accordion-client">{children}</div>;
};

Accordion.Item = AccordionItem;
