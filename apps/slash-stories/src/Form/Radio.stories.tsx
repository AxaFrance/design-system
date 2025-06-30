import { Radio, RadioModes } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef, useState } from "react";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type RadioProps = Omit<ComponentPropsWithRef<typeof Radio>, "classModifier"> & {
  classModifier?: string[];
};
export const RadioStory: StoryObj<RadioProps> = {
  name: "Radio",
  render: ({ classModifier, value: initValue, onChange, ...args }) => {
    const [value, setValue] = useState(initValue);
    return (
      <Radio
        {...args}
        classModifier={classModifier?.join(" ")}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
      />
    );
  },
  args: {
    mode: RadioModes.classic,
    orientation: undefined,
    value: "",
    classModifier: [],
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    options: [
      { label: "Paris", value: "paris", icon: villaIcon },
      { label: "Lille", value: "lille", icon: villaIcon },
      { label: "Madrid", value: "madrid", icon: villaIcon, disabled: true },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
    mode: {
      options: Object.values(RadioModes),
      control: { type: "inline-radio" },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" },
    },
    value: {
      options: ["empty", "paris", "lille", "madrid"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-radio" },
    },
    classModifier: {
      options: ["disabled", "required", "error"],
      control: { type: "inline-check" },
    },
  },
};
