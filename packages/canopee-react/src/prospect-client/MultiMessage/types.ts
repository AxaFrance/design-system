import type { ReactElement, ReactNode, ComponentType } from "react";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { Link } from "../Link/LinkCommon";
import type { MessageVariants } from "../Message/types";

export type MultiMessageItem = {
  /** Variant of the individual message */
  variant: MessageVariants;
  /** Title of the message */
  title?: string;
  /** Body content of the message */
  children?: ReactNode;
  /** Action (link or button) shown alongside the message body */
  action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
};
