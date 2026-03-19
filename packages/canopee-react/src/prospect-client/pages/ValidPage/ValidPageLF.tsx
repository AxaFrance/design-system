import { DataAgent } from "../../DataAgent/DataAgentLF";
import { Link } from "../../Link/LinkLF";
import { ExitLayout } from "../../Layout/ExitLayout/ExitLayoutLF";
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
