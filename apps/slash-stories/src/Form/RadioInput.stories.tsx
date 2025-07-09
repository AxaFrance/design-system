import {
  MessageTypes,
  RadioInput,
  RadioModes,
} from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

const classModifierOptions = ["required", "disabled"];

type Story = StoryObj<typeof RadioInput>;

export const RadioInputStory: Story = {
  name: "RadioInput",
  render: ({ ...args }) => (
    <form className="af-form" name="myform">
      <RadioInput {...args} />
    </form>
  ),
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "",
    classModifier: "",
    readOnly: false,
    disabled: false,
    name: "placeName",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
    message: "Error message",
    options: [
      { label: "Paris", value: "paris" },
      { label: "Lille", value: "lille" },
      { label: "Madrid", value: "madrid" },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: classModifierOptions,
      control: { type: "inline-check", separator: " " },
    },
    mode: {
      options: Object.values(RadioModes),
      control: { type: "inline-radio" },
    },
    value: {
      options: ["empty", "paris", "lille", "madrid"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-radio" },
    },
    messageType: {
      control: "inline-radio",
      options: Object.values(MessageTypes),
    },
  },
};
