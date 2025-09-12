import {
  ChoiceInput,
  HelpButton,
  MessageTypes,
} from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef } from "react";

type ChoiceInputProps = Omit<
  ComponentPropsWithRef<typeof ChoiceInput>,
  "classModifier"
> & {
  classModifier?: string[];
};

const meta: Meta<ChoiceInputProps> = {
  component: ChoiceInput,
  title: "Components/Form/Input/Choice",
  args: {
    name: "placeName",
    required: true,
    label: "Place type",
    placeholder: "Paris",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    classNameContainerInput: "col-md-10",
    classNameContainerLabel: "col-md-2",
    message: "",
    id: "uniqueid",
    classModifier: [],
    onChange: fn(),
    isVisible: true,
    readOnly: false,
    disabled: false,
    value: undefined,
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

export default meta;

export const ChoiceInputStory: StoryObj<ChoiceInputProps> = {
  name: "ChoiceInput",
  render: ({ classModifier, ...args }) => (
    <ChoiceInput classModifier={classModifier?.join(" ")} {...args} />
  ),
};

export const ChoiceInputWithChildrenStory: StoryObj<ChoiceInputProps> = {
  name: "ChoiceInput with help button",
  render: ({ classModifier, ...args }) => (
    <ChoiceInput classModifier={classModifier?.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
  ),
};
