import "@axa-fr/canopee-css/distributeur/Link/Link.css";
import { CustomLink, type CustomLinkProps } from "./CustomLink";
import { LinkAnchor, type LinkComponentProps } from "./LinkAnchor";

export type LinkProps = LinkComponentProps | CustomLinkProps;

export const Link = ({ ...props }: LinkProps) => {
  if ("render" in props) {
    return <CustomLink {...props} />;
  }

  return <LinkAnchor {...props} />;
};

Link.displayName = "Link";
