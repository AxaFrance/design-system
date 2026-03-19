import { Link } from "../../Link/LinkLF";
import { ExitLayout } from "../../Layout/ExitLayout/ExitLayoutLF";
import { ErrorPageCommon, type ErrorPageProps } from "./ErrorPageCommon";

export { type ErrorPageProps } from "./ErrorPageCommon";

export const ErrorPage = (props: ErrorPageProps) => (
  <ErrorPageCommon
    {...props}
    LinkComponent={Link}
    ExitLayoutComponent={ExitLayout}
  />
);
