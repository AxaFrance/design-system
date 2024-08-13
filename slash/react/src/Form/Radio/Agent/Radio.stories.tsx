import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { Radio, RadioModes } from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Slash/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
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
