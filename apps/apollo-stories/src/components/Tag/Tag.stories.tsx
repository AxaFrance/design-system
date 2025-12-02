import type { Meta, StoryObj } from "@storybook/react";

import { Tag, tagVariants } from "@axa-fr/canopee-react/prospect";

import { renderTag, renderTagAll } from "./render";

import "./Tag.story.scss";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components/Tag",
  parameters: { layout: "centered" },
  argTypes: {},
};

export default meta;

type StoryProps = React.ComponentProps<typeof Tag>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Tag",
  render: renderTag,
  args: { children: "Tag", variant: "info" },
  argTypes: {
    variant: {
      options: Object.values(tagVariants),
      control: { type: "select" },
    },
  },
};

export const All: StoryObj<typeof Tag> = { render: renderTagAll };
