import "@axa-fr/canopee-css/client/MessageBar/MessageBarLF.css";
import { Button } from "../Button/ButtonLF";
import { ClickIcon } from "../ClickIcon/ClickIconLF";
import { Icon } from "../Icon/IconLF";
import { MessageBarCommon, type MessageBarProps } from "./MessageBarCommon";

export type { MessageBarProps } from "./MessageBarCommon";
export type { MessageBarVariant } from "./types";

export const MessageBar = (props: MessageBarProps) => (
  <MessageBarCommon
    {...props}
    ButtonComponent={Button}
    ClickIconComponent={ClickIcon}
    IconComponent={Icon}
  />
);
