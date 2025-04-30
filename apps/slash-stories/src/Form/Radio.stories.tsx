import { Radio, RadioModes } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef } from "react";

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
  render: ({ classModifier, ...args }) => (
    <Radio classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    mode: RadioModes.classic,
    value: "",
    classModifier: [],
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    options: [
      { label: "Paris", value: "paris" },
      { label: "Lille", value: "lille" },
      { label: "Madrid", value: "madrid" },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
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
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
  },
};
