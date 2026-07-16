import { Tag, TagList } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TagList> = {
  title: "Components/TagList",
  component: TagList,
  args: {
    hideThreshold: 2,
  },
};

export default meta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  name: "TagList",
  render: (args) => (
    <TagList {...args}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
    </TagList>
  ),
};

export const WithOverflow: Story = {
  name: "TagList with overflow",
  render: (args) => (
    <TagList {...args}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
      <Tag>Auto</Tag>
      <Tag>Habitation</Tag>
      <Tag>Prévoyance</Tag>
    </TagList>
  ),
};

export const CustomThreshold: Story = {
  name: "TagList with custom threshold",
  render: (args) => (
    <TagList {...args} hideThreshold={3}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
      <Tag>Auto</Tag>
      <Tag>Habitation</Tag>
    </TagList>
  ),
};
