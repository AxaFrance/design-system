import { Summary } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

export default {
  title: "Components/Summary",
  component: Summary,
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: { type: "select" },
    },
  },
  args: {
    onClose: fn(),
  },
} as Meta;

const messages = ["Field Author is required", "Field PlaceName is required"];

type SummaryProps = React.ComponentProps<typeof Summary>;
type Story = StoryObj<SummaryProps>;

export const Template: Story = {
  name: "Simple Summary in error",
  render: (args) => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error",
  },
};

export const Success: Story = {
  name: "Summary in success with react nodes in messages",
  render: (args) => <Summary {...args} />,
  args: {
    messages: [
      <strong key="1">This text is in bold</strong>,
      <em key="2">and this one in italic</em>,
    ],
    title: "Congratulations on submitting a flawless form",
    isVisible: true,
    onClose: fn(),
    classModifier: "success",
  },
};
