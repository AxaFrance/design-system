import {
  HelpButton,
  MessageTypes,
  RadioInput,
  RadioModes,
} from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";
import preview from "../../.storybook/preview";

const meta = preview.meta({
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
});

export const RadioInputStory = meta.story({
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
});

export const RadioInputWithChildrenStory = meta.story({
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
});
