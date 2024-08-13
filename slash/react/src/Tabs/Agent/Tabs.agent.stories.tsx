import { Meta, type StoryObj } from "@storybook/react";
import { Badge } from "../../Badge/Badge";
import { Tabs } from "./Tabs.agent";
import type { TabsCoreProps } from "./components/TabsCore";

export default {
  title: "Slash/Components/Tabs",
  component: Tabs,
  parameters: {
    options: {},
  },
  argTypes: {
    onChange: { action: "tab changed" },
  },
} as Meta;

const TabTitleIconLeft = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const TabTitleBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

export const SingleTab: StoryObj<TabsCoreProps> = {
  name: "Single Tab",
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab title="My Title">Content of my single tab</Tabs.Tab>
    </Tabs>
  ),
  args: { activeIndex: "0" },
  argTypes: { onChange: { action: "onChange" } },
};

export const ComplexTabs: StoryObj<TabsCoreProps> = {
  name: "Complex Tabs",
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
        Content of my fifth tab
      </Tabs.Tab>
    </Tabs>
  ),
  args: { activeIndex: "1" },
  argTypes: { onChange: { action: "onChange" } },
};
