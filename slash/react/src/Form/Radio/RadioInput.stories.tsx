import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RadioModes } from "./Radio";
import { RadioInput } from "./RadioInput";
import { MessageTypes } from "../core";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const RadioInputStory: Story = {
  name: "RadioInput",
  render: ({ ...args }) => <RadioInput {...args} />,
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "",
    classModifier: "",
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    forceDisplayMessage: true,
    messageType: MessageTypes.error,
    message: "",
    options: [
      { label: "Paris", value: "paris" },
      { label: "Lille", value: "lille" },
      { label: "Madrid", value: "madrid" },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
    mode: {
      options: [RadioModes.classic, RadioModes.default, RadioModes.inline],
      control: { type: "inline-radio" },
    },
    value: {
      options: ["empty", "paris", "lille", "madrid"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-radio" },
    },
  },
};
