import React from "react";
import { Tab, TabProps } from "./components/Tab";
import { TabsCore, TabsCoreProps } from "./components/TabsCore";

type TTabs = React.ComponentType<TabsCoreProps> & {
  Tab: React.ComponentType<TabProps>;
};

const Tabs: TTabs = (props: TabsCoreProps) => <TabsCore {...props} />;

Tabs.Tab = Tab;
export { Tabs };
