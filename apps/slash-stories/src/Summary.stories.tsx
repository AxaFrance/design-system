import { Summary } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const meta = preview.meta({
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
});
export default meta;

const messages = ["Field Author is required", "Field PlaceName is required"];

export const Template = meta.story({
  name: "Simple Summary in error",
  render: (args) => <Summary {...args} />,
  args: {
    messages,
    isVisible: true,
    onClose: fn(),
    classModifier: "error",
  },
});

export const Success = meta.story({
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
});
