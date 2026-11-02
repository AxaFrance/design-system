import { Card } from "../Card/CardApollo";
import { Icon } from "../Icon/IconApollo";
import { Link } from "../Link/LinkApollo";
import {
  CardMarketingCommon,
  type CardMarketingProps,
} from "./CardMarketingCommon";

export const CardMarketing = (props: CardMarketingProps) => (
  <CardMarketingCommon
    {...props}
    CardComponent={Card}
    IconComponent={Icon}
    LinkComponent={Link}
  />
);

export type { CardMarketingProps };
