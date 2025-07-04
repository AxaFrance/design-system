import { DataAgentCommon, DataAgentProps } from "./DataAgentCommon";
import { ContentItemMono } from "../ContentItemMono/ContentItemMonoApollo";
import { Divider } from "../Divider/DividerApollo";

export const DataAgent = (props: DataAgentProps) => (
  <DataAgentCommon
    {...props}
    DividerComponent={Divider}
    ContentItemMonoComponent={ContentItemMono}
  />
);
