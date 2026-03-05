import { Heading } from "../../Heading/HeadingLF";
import { Icon } from "../../Icon/IconLF";
import {
  Agent,
  Action,
  Content,
  ExitLayoutCommon,
  type ExitLayoutProps,
} from "./ExitLayoutCommon";

export {
  type ExitLayoutWithSubComponents,
  type ExitLayoutProps,
} from "./ExitLayoutCommon";

export const ExitLayout = (props: ExitLayoutProps) => (
  <ExitLayoutCommon
    {...props}
    HeadingComponent={Heading}
    IconComponent={Icon}
  />
);

ExitLayout.Agent = Agent;
ExitLayout.Action = Action;
ExitLayout.Content = Content;
