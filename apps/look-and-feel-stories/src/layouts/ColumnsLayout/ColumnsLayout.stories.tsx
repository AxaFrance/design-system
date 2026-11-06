import type { Meta, StoryObj } from "@storybook/react";
import { Card, ColumnsLayout } from "@axa-fr/canopee-react/client";
import { LayoutDemo } from "../LayoutDemo/LayoutDemo";

import "../layout.css";

const topContent = <Card className="af-card--layout">top content</Card>;

const leftContent = (
  <Card className="af-card--layout af-card--layout--plainheight">
    left content
  </Card>
);

const centerContent = (
  <Card className="af-card--layout af-card--layout--plainheight">
    center content
  </Card>
);

const rightContent = (
  <Card className="af-card--layout af-card--layout--plainheight">
    right content
  </Card>
);

const meta = {
  title: "Layouts/Columns Layout",
  component: ColumnsLayout,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <LayoutDemo
        mainProps={{ className: "layout-demo" }}
        title="Car insurance"
      >
        <Story />
      </LayoutDemo>
    ),
  ],
  argTypes: {
    children: { control: false },
    headingProps: { control: "object" },
    isFit: { control: false },
  },
  args: {
    headingProps: {
      children: "Your title",
      firstSubtitle: "Subtitle",
    },
  },
} satisfies Meta<typeof ColumnsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopLeftCenter: Story = {
  name: "Top + Left + Center",
  render: (args) => (
    <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
    </ColumnsLayout>
  ),
};

export const TopCenterRight: Story = {
  name: "Top + Center + Right",
  render: (args) => (
    <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
  ),
};

export const TopLeftCenterRight: Story = {
  name: "Top + Left + Center + Right",
  render: (args) => (
    <ColumnsLayout {...args}>
      <ColumnsLayout.Top>{topContent}</ColumnsLayout.Top>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
  ),
};

export const LeftCenterRight: Story = {
  name: "Left + Center + Right",
  render: (args) => (
    <ColumnsLayout {...args}>
      <ColumnsLayout.Left>{leftContent}</ColumnsLayout.Left>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
      <ColumnsLayout.Right>{rightContent}</ColumnsLayout.Right>
    </ColumnsLayout>
  ),
};

export const FitContent: Story = {
  name: "Center Only + isFit",
  args: { isFit: true },
  argTypes: {
    isFit: { control: "boolean" },
  },
  render: (args) => (
    <ColumnsLayout {...args}>
      <ColumnsLayout.Content>{centerContent}</ColumnsLayout.Content>
    </ColumnsLayout>
  ),
};
