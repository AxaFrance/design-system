import { Heading } from "../../Heading/HeadingApollo";
import { Icon } from "../../Icon/IconApollo";
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
