import { Meta, StoryObj } from "@storybook/react";
import { ClickIcon } from "@axa-fr/design-system-apollo-react";
import visibility from "@material-symbols/svg-400/rounded/visibility-fill.svg";

const meta: Meta<typeof ClickIcon> = {
  component: ClickIcon,
  title: "Components/ClickIcon",
  argTypes: {
    onClick: { action: "onClick" },
    "aria-label": {
      control: "text",
      description: "The aria-label attribute for accessibility.",
      defaultValue: "Click icon",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClickIcon>;

export const Default: Story = {
  name: "ClickIcon",
  render: ({ ...args }) => <ClickIcon {...args} />,
  args: {
    src: visibility,
  },
};
