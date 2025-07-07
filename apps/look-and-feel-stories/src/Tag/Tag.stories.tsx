import { Tag } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
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
