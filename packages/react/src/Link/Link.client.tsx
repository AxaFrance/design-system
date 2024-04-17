import "@axa-fr/design-system-css/dist/Link/Link.client.scss";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type AlertType =
  | "validation"
  | "error"
  | "warning"
  | "information"
  | "neutral";

type LinkProps = {
  url: string;
  openInNewTab?: boolean;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  url,
  openInNewTab,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const newTabProps = openInNewTab && {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <a
      className={`af-link ${openInNewTab ? " af-link--openInNewTab" : ""}`}
      href={url}
      {...newTabProps}
      {...props}
    >
      {children}
      {newTabProps && <OpenInNew />}
    </a>
  );
};
