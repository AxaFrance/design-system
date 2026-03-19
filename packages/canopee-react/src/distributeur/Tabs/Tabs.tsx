import React from "react";
import { Tab, type TabProps } from "./components/Tab";
import { TabsCore, type TabsCoreProps } from "./components/TabsCore";

type TTabs = React.ComponentType<TabsCoreProps> & {
  Tab: React.ComponentType<TabProps>;
};

const Tabs: TTabs = (props: TabsCoreProps) => <TabsCore {...props} />;

Tabs.Tab = Tab;
export { Tabs };
