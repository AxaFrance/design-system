import "@axa-fr/canopee-css/prospect/TabBar/TabBarApollo.css";
import { ItemTabBar } from "../ItemTabBar/ItemTabBarApollo";
import { TabBarCommon, type TabBarProps } from "./TabBarCommon";

export {
  tabBarDirection,
  type TabBarProps,
  type TabBarDirection,
} from "./TabBarCommon";

export const TabBar = (props: TabBarProps) => (
  <TabBarCommon {...props} ItemTabBarComponent={ItemTabBar} />
);
