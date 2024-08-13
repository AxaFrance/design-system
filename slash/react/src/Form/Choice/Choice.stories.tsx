import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { Choice } from "./Choice";

const meta: Meta<typeof Choice> = {
  component: Choice,
  title: "Slash/Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
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
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
  },
};
