import "@axa-fr/design-system-apollo-css/dist/Heading/HeadingApollo.scss";

import { Heading as HeadingCommon } from "./HeadingCommon";
import { Tag } from "../Tag/TagApollo";
import { HeadingProps } from "./types";

export type { HeadingLevel, HeadingProps } from "./types";

export const Heading = ({ tag, tagProps = {}, ...props }: HeadingProps) => (
  <HeadingCommon
    {...props}
    tagComponent={Tag}
    tagProps={{ ...tagProps, children: tag }}
  />
);
