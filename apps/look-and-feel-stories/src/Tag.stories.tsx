import { Tag } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
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
