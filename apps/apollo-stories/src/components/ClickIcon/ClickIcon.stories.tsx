import { Meta, StoryObj } from "@storybook/react-vite";
import { ClickIcon, iconVariants } from "@axa-fr/design-system-apollo-react";
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
    iconVariant: {
      options: Object.values(iconVariants),
      control: { type: "select" },
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
