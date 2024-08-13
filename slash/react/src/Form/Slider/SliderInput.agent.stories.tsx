import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { SliderInput } from ".";
import { MessageTypes } from "../core";

const MODIFIERS = ["required", "disabled"];

const meta: Meta = {
  title: "Slash/Components/Form/Input/Slider/SliderInput",
  component: SliderInput,
};

export default meta;

const options = [
  { label: "64", value: 64 },
  { label: "128", value: 128 },
  { label: "256", value: 256 },
  { label: "1024", value: 1024 },
  { label: "2048", value: 2048 },
  { label: "4096", value: 4096 },
];

type StoryProps = Omit<ComponentProps<typeof SliderInput>, "classModifier"> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const SliderInputStory: Story = {
  name: "SliderInput",
  render: ({ classModifier, ...args }) => (
    <form className="af-form" name="myform">
      <SliderInput classModifier={classModifier.join(" ")} {...args} />
    </form>
  ),
  args: {
    name: "placeName",
    options,
    id: "uniqueid",
    value: 2048,
    disabled: false,
    className: "",
    classModifier: [],
    label: "Your name",
    message: "",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "inline-check" },
    },
    onChange: { action: "onChange" },
    onChangeComplete: { action: "onChangeComplete" },
    onBlur: { action: "onBlur" },
    onFocus: { action: "onFocus" },
  },
};
