import { Tag } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import { renderTagAll } from "./render";

import "./Tag.story.scss";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  args: {
    children: "Texte",
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  name: "Tag",
  render: (args) => <Tag {...args} />,
};

export const All: Story = {
  name: "Tag All Variants",
  render: renderTagAll,
};
