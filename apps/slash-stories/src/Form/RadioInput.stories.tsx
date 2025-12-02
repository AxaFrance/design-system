import {
  HelpButton,
  MessageTypes,
  RadioInput,
  RadioModes,
} from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Components/Form/Input/Radio",
  args: {
    label: "Where are you ?",
    required: true,
    mode: RadioModes.classic,
    value: "paris",
    classModifier: "",
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
      options: [
        RadioModes.classic,
        RadioModes.default,
        RadioModes.inline,
        RadioModes.cardRadio,
      ],
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

export default meta;

type Story = StoryObj<typeof RadioInput>;

export const RadioInputStory: Story = {
  name: "RadioInput",
  render: ({ value, ...args }) => {
    const [newValue, setValue] = useState(value);
    return (
      <RadioInput
        {...args}
        value={newValue}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      />
    );
  },
};

export const RadioInputWithChildrenStory: Story = {
  name: "RadioInput with help button",
  render: ({ value, ...args }) => {
    const [newValue, setValue] = useState(value);
    return (
      <RadioInput
        {...args}
        value={newValue}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      >
        <HelpButton mode="hover">Help</HelpButton>
      </RadioInput>
    );
  },
};
