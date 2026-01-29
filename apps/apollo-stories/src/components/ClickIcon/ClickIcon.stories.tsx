import { Meta, StoryObj } from "@storybook/react";
import { ClickIcon } from "@axa-fr/canopee-react/prospect";
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
      options: ["primary", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["S", "XS"],
      control: { type: "select" },
    },
    hasBackground: {
      control: { type: "boolean" },
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
