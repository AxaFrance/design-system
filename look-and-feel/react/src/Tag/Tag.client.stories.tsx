import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Look-and-feel/Components/Tag",
  component: Tag,
};

export default meta;

export const Default: StoryObj<typeof Tag> = {
  name: "Tag",
  render: (args) => <Tag {...args} />,
  args: {
    children: "Texte",
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: ["", "success", "error", "warning", "info"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};
