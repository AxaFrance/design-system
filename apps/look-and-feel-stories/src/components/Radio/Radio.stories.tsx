import { Radio } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/Radio",
  component: Radio,
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
    isInvalid: { type: "boolean" },
  },
  args: {
    name: "option1",
    value: "option1",
  },
};

export default meta;

export const RadioStory: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Playground",
  render: ({ isInvalid, ...args }) => (
    <Radio {...args} isInvalid={isInvalid ? true : undefined} />
  ),
};
