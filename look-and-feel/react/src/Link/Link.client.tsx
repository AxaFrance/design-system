import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Link/Link.client.scss";
import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import { Svg } from "../Svg";

type LinkProps = {
  openInNewTab?: boolean;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
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
      href={href}
      {...newTabProps}
      {...props}
    >
      {children}
      {newTabProps && <Svg src={openInNew} />}
    </a>
  );
};
