import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "@axa-fr/design-system-css/dist/Link/Link.client.scss";
import { Icon } from "../Icons/Icons.client";

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
      {newTabProps && <Icon name="open_in_new" />}
    </a>
  );
};
