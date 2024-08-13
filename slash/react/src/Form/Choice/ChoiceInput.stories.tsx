import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { MessageTypes } from "../core";
import { ChoiceInput } from "./ChoiceInput";

const meta: Meta<typeof ChoiceInput> = {
  component: ChoiceInput,
  title: "Slash/Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type ChoiceInputProps = Omit<
  ComponentPropsWithRef<typeof ChoiceInput>,
  "classModifier"
> & {
  classModifier?: string[];
};

export const ChoiceInputStory: StoryObj<ChoiceInputProps> = {
  name: "ChoiceInput",
  render: ({ classModifier, ...args }) => (
    <ChoiceInput classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    name: "placeName",
    label: "Place type",
    placeholder: "Paris",
    message: "",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    id: "uniqueid",
    classModifier: [],
    isVisible: true,
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
