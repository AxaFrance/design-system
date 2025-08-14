import "@axa-fr/design-system-slash-css/dist/Link/Link.css";
import { forwardRef } from "react";
import { CustomLink, type CustomLinkProps } from "./CustomLink";
import { LinkAnchor, type LinkComponentProps } from "./LinkAnchor";

export type LinkProps = LinkComponentProps | CustomLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    if ("render" in props) {
      return <CustomLink {...props} />;
    }

    return <LinkAnchor {...props} ref={ref} />;
  },
);

Link.displayName = "Link";
