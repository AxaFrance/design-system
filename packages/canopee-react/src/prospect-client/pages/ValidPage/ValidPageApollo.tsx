import { DataAgent } from "../../DataAgent/DataAgentApollo";
import { Link } from "../../Link/LinkApollo";
import { ExitLayout } from "../../Layout/ExitLayout/ExitLayoutApollo";
import { ValidPageCommon, type ValidPageProps } from "./ValidPageCommon";

export { type ValidPageProps } from "./ValidPageCommon";

export const ValidPage = (props: ValidPageProps) => (
  <ValidPageCommon
    {...props}
    DataAgentComponent={DataAgent}
    LinkComponent={Link}
    ExitLayoutComponent={ExitLayout}
  />
);
