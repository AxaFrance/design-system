import { DataAgentCommon, type DataAgentProps } from "./DataAgentCommon";
import { ClickItem } from "../List/ClickItem/ClickItemApollo";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Divider } from "../Divider/DividerApollo";

import "@axa-fr/design-system-apollo-css/dist/DataAgent/DataAgentApollo.scss";

export const DataAgent = (props: DataAgentProps) => (
  <DataAgentCommon
    {...props}
    DividerComponent={Divider}
    ClickItemComponent={ClickItem}
    ContentItemMonoComponent={ContentItemMono}
  />
);
