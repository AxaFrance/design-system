import { DataAgentCommon, DataAgentProps } from "./DataAgentCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoLF";
import { Divider } from "../Divider/DividerLF";

export const DataAgent = (props: DataAgentProps) => (
  <DataAgentCommon
    {...props}
    DividerComponent={Divider}
    ContentItemMonoComponent={ContentItemMono}
  />
);
