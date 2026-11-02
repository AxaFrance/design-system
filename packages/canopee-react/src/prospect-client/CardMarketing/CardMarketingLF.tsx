import { Card } from "../Card/CardLF";
import { Icon } from "../Icon/IconLF";
import { Link } from "../Link/LinkLF";
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
