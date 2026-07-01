import "@axa-fr/canopee-css/client/MessageBar/MessageBarLF.css";
import { AccordionCore } from "../AccordionCore/AccordionCoreLF";
import { Button } from "../Button/ButtonLF";
import { Icon } from "../Icon/IconLF";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export type { MessageBarProps } from "./MessageBarCommon";
export type { MessageBarVariant } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    ButtonComponent={Button}
    IconComponent={Icon}
  />
);
