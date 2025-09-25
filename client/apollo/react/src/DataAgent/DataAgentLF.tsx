import { DataAgentCommon, type DataAgentProps } from "./DataAgentCommon";
import { ClickItem } from "../List/ClickItem/ClickItemLF";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Divider } from "../Divider/DividerLF";

import "@axa-fr/design-system-apollo-css/dist/DataAgent/DataAgentLF.css";

export const DataAgent = (props: DataAgentProps) => (
  <DataAgentCommon
    {...props}
    DividerComponent={Divider}
    ClickItemComponent={ClickItem}
    ContentItemMonoComponent={ContentItemMono}
  />
);
