import { Link } from "../../Link/LinkApollo";
import { ExitLayout } from "../../Layout/ExitLayout/ExitLayoutApollo";
import { ErrorPageCommon, type ErrorPageProps } from "./ErrorPageCommon";

export { type ErrorPageProps } from "./ErrorPageCommon";

export const ErrorPage = (props: ErrorPageProps) => (
  <ErrorPageCommon
    {...props}
    LinkComponent={Link}
    ExitLayoutComponent={ExitLayout}
  />
);
