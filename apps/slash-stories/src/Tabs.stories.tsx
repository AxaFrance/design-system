import { Tabs, Tag } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    options: {},
  },
  argTypes: {
    onChange: { action: "tab changed" },
  },
  args: {
    onChange: fn(),
  },
});
export default meta;

const TabTitleIconLeft = <span>Long title that is very long</span>;
const TabTitleIconRight = <span>Title</span>;
const TabTitleBadge = (
  <span>
    Title with badge
    <Tag variant="success">42</Tag>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Tag variant="error"> Lorem ipsum </Tag>
  </span>
);

export const SingleTab = meta.story({
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab title="My Title">Content of my single tab</Tabs.Tab>
    </Tabs>
  ),
  args: { activeIndex: "0" },
  argTypes: { onChange: { action: "onChange" } },
});

export const ComplexTabs = meta.story({
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
        Content of my fourth tab
      </Tabs.Tab>
    </Tabs>
  ),
  args: { activeIndex: "1" },
  argTypes: { onChange: { action: "onChange" } },
});
