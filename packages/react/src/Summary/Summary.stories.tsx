import { Meta, StoryObj } from "@storybook/react";
import { Summary } from "./Summary";

export default {
  title: "Agent/Components/Summary",
  component: Summary,
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: { type: "select" },
    },
  },
} as Meta;

const messages = [<>Field Author is required</>, "Field PlaceName is required"];

type SummaryProps = React.ComponentProps<typeof Summary>;
type Story = StoryObj<SummaryProps>;

export const Template: Story = {
  name: "Summary",
  render: (args) => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
  },
};
