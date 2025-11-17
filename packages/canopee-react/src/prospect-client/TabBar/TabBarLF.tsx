import "@axa-fr/canopee-css/client/TabBar/TabBarLF.css";
import { ItemTabBar } from "../ItemTabBar/ItemTabBarLF";
import { TabBarCommon, type TabBarProps } from "./TabBarCommon";

export {
  tabBarDirection,
  type TabBarProps,
  type TabBarDirection,
} from "./TabBarCommon";

export const TabBar = (props: TabBarProps) => (
  <TabBarCommon {...props} ItemTabBarComponent={ItemTabBar} />
);
