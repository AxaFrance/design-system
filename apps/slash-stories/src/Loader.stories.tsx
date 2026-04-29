import { Loader } from "@axa-fr/canopee-react/distributeur";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      options: ["inline", "fullScreen", "content"],
      control: { type: "select" },
    },
    text: { control: { type: "text" } },
  },
};

export default meta;

type StoryProps = React.ComponentProps<typeof Loader>;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  name: "Loader",
  render: (args) => (
    <div style={{ height: "100vh" }}>
      <Loader {...args} />
    </div>
  ),
  args: {
    variant: "inline",
    text: "Recherche en cours",
  },
};
