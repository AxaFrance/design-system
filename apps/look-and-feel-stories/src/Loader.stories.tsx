import { Loader } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader",
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

export const LoaderGrayStory: Story = {
  name: "Loader gray",
  render: ({ ...args }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5,
    variant: "gray",
  },
};

export const LoaderWhiteStory: Story = {
  name: "Loader white",
  render: ({ ...args }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5,
    variant: "white",
  },
};

export const MultiExamples: StoryObj<typeof Loader> = {
  name: "Loader examples",
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "2rem",
        backgroundColor: "lightgray",
      }}
    >
      <Loader variant="blue" />
      <Loader variant="gray" />
      <Loader variant="white" />
    </div>
  ),
};
