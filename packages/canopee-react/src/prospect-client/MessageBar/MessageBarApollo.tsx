import "@axa-fr/canopee-css/prospect/MessageBar/MessageBarApollo.css";
import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";
import { Button } from "../Button/ButtonApollo";
import { Icon } from "../Icon/IconApollo";
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
