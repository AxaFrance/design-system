import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Look-and-feel/Components/Loader",
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderStory: Story = {
  name: "Loader",
  render: ({ ...args }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5,
  },
};
