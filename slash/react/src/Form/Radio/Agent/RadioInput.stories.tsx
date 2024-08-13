import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { RadioModes } from "./Radio";
import { RadioInput } from "./RadioInput";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Slash/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type RadioInputProps = Omit<
  ComponentPropsWithRef<typeof RadioInput>,
  "classModifier"
> & {
  classModifier?: string[];
};
export const RadioInputStory: StoryObj<RadioInputProps> = {
  name: "RadioInput",
  render: ({ classModifier, ...args }) => (
    <RadioInput classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    label: "Where are you ?",
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
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
  },
};
