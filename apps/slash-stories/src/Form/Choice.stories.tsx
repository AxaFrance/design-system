import { Choice } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef } from "react";

const meta: Meta<typeof Choice> = {
  component: Choice,
  title: "Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type ChoiceProps = Omit<
  ComponentPropsWithRef<typeof Choice>,
  "classModifier"
> & {
  classModifier?: string[];
};

export const ChoiceStory: StoryObj<ChoiceProps> = {
  name: "Choice",
  render: ({ classModifier, ...args }) => (
    <Choice classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    name: "placeName",
    placeholder: "Paris",
    id: "uniqueid",
    classModifier: [],
    readOnly: false,
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
};
