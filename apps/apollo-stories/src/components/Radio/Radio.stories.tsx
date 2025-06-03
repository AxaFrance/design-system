import { Radio } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/RadioButton",
  component: Radio,
  argTypes: {},
};

export default meta;

export const RadioStory: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Basic",

  render: ({ ...args }) => <Radio {...args} />,
  args: {
    name: "option1",
    value: "option1",
  },
  argTypes: {
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
    onChange: { action: "onChange" },
  },
};
